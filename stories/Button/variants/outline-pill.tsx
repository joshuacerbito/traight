import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";

import { ButtonProps } from "../button";

export function ButtonOutlinePill({ text, link, target }: ButtonProps) {
  return (
    <Link
      className={`inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 ${inter.className}`}
      href={link}
      target={target || "_self"}
    >
      {text}
    </Link>
  );
}
