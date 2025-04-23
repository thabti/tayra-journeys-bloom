import { sendGAEvent } from '@next/third-parties/google';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackEvent(event: string, value: string, label: string = '') {
    sendGAEvent({
        event, value, label
    });
}
