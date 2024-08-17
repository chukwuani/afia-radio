import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatNumber(number: number | string, options: Intl.NumberFormatOptions = {}) {
	return new Intl.NumberFormat("en-US", {
		style: options.style ?? "decimal",
		notation: options.notation ?? "standard",
		minimumFractionDigits: options.minimumFractionDigits ?? 0,
		maximumFractionDigits: options.maximumFractionDigits ?? 2,
		...options,
	}).format(Number(number));
}

export function formatDate(date: Date | string | number, options: Intl.DateTimeFormatOptions = {}) {
	return new Intl.DateTimeFormat("en-US", {
		month: options.month ?? "long",
		day: options.day ?? "numeric",
		year: options.year ?? "numeric",
		...options,
	}).format(new Date(date));
}
