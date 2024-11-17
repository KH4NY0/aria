import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aria",
  description: "A web app that helps developers track the time spent on coding tasks.This is especially useful for improving focus, productivity, and time management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body
            className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}
      >
        {children}
      </body>
    </html>
  );
}
