import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatFeeRange(minFee: number, maxFee: number): string {
  return `Rs. ${(minFee / 100000).toFixed(1)} L - ${(maxFee / 100000).toFixed(1)} L`;
}

export function getLocationCity(location: string): string {
  const parts = location.split(",");
  return parts[parts.length - 2]?.trim() || location;
}
