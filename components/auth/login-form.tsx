"use client";

import * as z from "zod";
import {useState, useTransition} from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";

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
import {login} from "@/actions/login";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";
import {useSearchParams} from "next/navigation";


export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") === "0AuthAccountNotLinked" ? "Email already in use" : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values)
          .then((data) => {

            setError(data?.error);
            setSuccess(data?.success);
          })
    });


  };

  const onClick = (provider: "github") => {
      signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
      });
  };

  return (
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Enter your details below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
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
                  <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
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

              <FormError message={error || urlError}/>
              <FormSuccess message={success}/>

              <Button disabled={isPending} type="submit" className="w-full">
                Login
              </Button>

              <div className="flex items-center justify-center w-full my-4">
                <div
                    className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                <span className="px-4 text-gray-600 font-medium">or</span>
                <div
                    className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              </div>


              <div className="flex gap-4">
                <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => onClick("github")}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                  <h1>Login with GitHub</h1>
                </Button>
              </div>
            </div>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
  );
}
