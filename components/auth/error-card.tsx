"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {ExclamationTriangleIcon} from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <form className="flex items-center justify-center min-h-screen">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <div className="w-full flex justify-center">
                        <ExclamationTriangleIcon className="text-destructive"/>
                    </div>
                    <CardTitle className="text-2xl">Oops! Something went wrong!</CardTitle>
                    <CardDescription>
                        It's us not you, try logging in back to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <div className="mt-4 text-center text-sm">
                        <Link href="/auth/login" className="underline">
                            Back to login
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
};
