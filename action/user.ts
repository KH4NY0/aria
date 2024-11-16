"use server";

import connectDB from "@/lib/db";
import { User } from "VAR_USERLAND"

const registerUser = async (formData: FormData) => {
    const firstName = formData.get('firstname') as string;
    const lastName = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!firstName || !lastName || !email || !password) {
        throw new Error('Please fill in all fields')
    }


    await connectDB()

    // existing user
    const existingUser = await User.findOne({email})


};

export { registerUser };