export default defineNuxtPlugin(() => {

    // only run on client side (on browser)
    if (!import.meta.client) return;

    const config = useRuntimeConfig();
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });

    if (config.public.gtmId) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${config.public.gtmId}`;
        document.head.appendChild(script);
    }
});
