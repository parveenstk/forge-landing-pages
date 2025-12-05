<script setup lang="ts">

const goBack = () => {
    if (window.history.length > 1) window.history.back()
    else clearError({ redirect: '/' })
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-indigo-100">
        <div
            class="max-w-md mx-3 md:mx-auto  text-center px-6 py-10 bg-white/80 rounded-3xl shadow-xl border border-white/60">

            <div class="text-6xl mb-4">
                {{ errorContent.emoji }}
            </div>

            <p class="text-sm font-semibold tracking-[0.3em] text-indigo-500 mb-2">
                {{ errorContent.label }}
            </p>

            <h1 class="text-4xl font-extrabold text-slate-800 mb-3">
                {{ errorContent.heading }}
            </h1>

            <p class="text-slate-600 mb-4">
                {{ errorContent.message }}
            </p>

            <p class="text-slate-500 text-sm mb-8">
                {{ errorContent.extra }}
            </p>

            <div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <!-- <button type="button" @click="goHome"
                    class="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition active:scale-95 bg-indigo-500 text-white cursor-pointer">
                    {{ errorContent.primaryButton }}
                </button> -->

                <button type="button" @click="goBack"
                    class="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold border border-indigo-200 text-indigo-600 bg-white hover:bg-indigo-50 transition active:scale-95 cursor-pointer">
                    {{ errorContent.secondaryButton }}
                </button>
            </div>

            <!-- <p class="mt-8 text-xs text-slate-400">
                {{ errorContent.tip }}
            </p> -->
        </div>
    </div>
</template>
