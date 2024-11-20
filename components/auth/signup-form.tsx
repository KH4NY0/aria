"use client";

import * as z from "zod";
import {useState, useTransition} from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {LoginSchema, SignUpSchema} from "@/schemas";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/ui/form-success";
import {signup} from "@/actions/signup";

export const SignUpForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            signup(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        });

    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Let's get you started</CardTitle>
                    <CardDescription>
                        Enter your details to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="e.g: khanyo"
                                    {...register("name")}
                                    disabled={isPending}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>


                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    {...register("email")}
                                    disabled={isPending}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    {...register("password")}
                                    disabled={isPending}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                                )}
                            </div>

                            <FormError message={error}/>
                            <FormSuccess message={success}/>

                            <Button disabled={isPending} type="submit" className="w-full">
                                Create Account
                            </Button>


                            <div className="flex gap-4">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                    }}
                                >
                                    <FontAwesomeIcon icon={faGoogle} size="2x"/>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => {
                                    }}
                                >
                                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="/auth/login" className="underline">
                                Login
                            </Link>
                        </div>
                </CardContent>
            </Card>
        </form>
);
}
