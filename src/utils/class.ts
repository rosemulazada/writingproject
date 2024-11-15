import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const c = (...args: ClassValue[]) => twMerge(clsx(args))