import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";

import { ButtonProps } from "../button";

export function ButtonPill({ text, link, target }: ButtonProps) {
  return (
    <Link
      className={`inline-block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ${inter.className}`}
      href={link}
      target={target || "_self"}
    >
      {text}
    </Link>
  );
}
