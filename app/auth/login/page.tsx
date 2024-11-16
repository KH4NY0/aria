import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {IconBrandGithub, IconBrandGoogle} from "@tabler/icons-react";

const Login = () => {
    return (
        <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black" >
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-5">Welcome back</h2>

            <form>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="example@gmail.com" name="email" required/>

                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="your secure password" name="password" required className="mb-5"/>

                <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900
            dark:to-zinc-900 to-neutral-600 block drak:bg-zinc-800 w-full text-white rounded-md h-10
            font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
            dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">Log in &rarr;
                </button>

                <p className="pt-4">
                    Don't have an account? <Link href="/auth/sign-up" className="text-blue-500">Sign up</Link>
                </p>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transperant my-8 h-[1px] w-full" />

                <section className="flex flex-col space-y-4">

                        <button className="relative group/btn flex spacce-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">Github</span>
                        </button>

                        <button className="relative group/btn flex spacce-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
                        </button>

                </section>

            </form>
        </div>
    );
}

export default Login