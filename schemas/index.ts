import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(1, "Password is required")
});

export const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(6, "Minimum 6 characters required"),
    name: z.string().min(1, "Name is required")
});

