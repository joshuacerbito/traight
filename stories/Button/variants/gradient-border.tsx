import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";

import { ButtonProps } from "../button";

export function ButtonGradientBorder({ text, link, target }: ButtonProps) {
  return (
    <Link
      className={`inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 ${inter.className}`}
      href={link}
      target={target || "_self"}
    >
      <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
        {text}
      </span>
    </Link>
  );
}
