import {db} from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
    try {

        return await db.verificationToken.findUnique({
            // @ts-ignore
            where: { token }
        });
    } catch {
        return null;
    }
}

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        // @ts-ignore
        return await db.verificationToken.findFirst({
            where: { email }
        });
    } catch {
        return null;
    }
}