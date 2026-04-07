import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function renderError(error: unknown): { message: string } {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};
