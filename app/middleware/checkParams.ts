export default defineNuxtRouteMiddleware((to, from) => {

    const v = String(to.params.v ?? ''); // Always treat as string
    const match = v.match(/^ch(\d+)$/); // Expect pattern: ch<number>

    // If it doesn't match the pattern at all → invalid
    if (!match) {
        return navigateTo('/error');
    }

    const ch = Number(match[1]); // the number after "ch"

    // ch must be 1–5
    const isValidCh = ch >= 1 && ch <= 5;

    if (!isValidCh) {
        return navigateTo('/error');
    }

    // saving the dynamic params in local storage
    saveToStorage("lpParam", `ch${ch}`, "local");
});
