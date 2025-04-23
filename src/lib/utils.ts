import TagManager from 'react-gtm-module';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackEvent(event: string, value: string, label: string = '') {    
    TagManager.dataLayer({
        dataLayer: {
            event,
            value,
            label
        }
    })
}
