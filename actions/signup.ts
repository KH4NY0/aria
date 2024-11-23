"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { SignUpSchema } from "@/schemas";
import {getUserByEmail} from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const signup = async (values: z.infer<typeof SignUpSchema>) => {
    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields!"};
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already exists" }
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    )

    return { success: "Confirmation email has been sent" };

};

