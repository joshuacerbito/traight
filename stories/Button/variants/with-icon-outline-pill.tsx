import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";

import { ButtonProps } from "../button";

export function ButtonWithIconOutlinePill({ text, link, target }: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center rounded-full border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ${inter.className}`}
      href={link}
      target={target || "_self"}
    >
      <span className="text-sm font-medium">{text}</span>

      <svg
        className="ml-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
}
