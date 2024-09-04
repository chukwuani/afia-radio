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

export function formatDuration(minutes: number): string {
	if (minutes <= 60) {
		return `${minutes} min${minutes !== 1 ? "s" : ""}`;
	} else {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		let result = `${hours} hour${hours !== 1 ? "s" : ""}`;
		if (remainingMinutes > 0) {
			result += ` ${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""}`;
		}
		return result;
	}
}
