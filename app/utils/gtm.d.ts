export { };

declare global {
    interface Window {
        dataLayer: Record<string, any>[];
        // fbq: Record<string, any>[];
        fbq: (...args: any[]) => void;
    }
}