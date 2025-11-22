<script setup lang="ts">

defineProps({
    reviewText: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="rw lg:space-y-4 space-y-2 bg-[#F0F0F0] lg:p-6 p-4  mb-5">
        <div class="flex gap-1">
            <img v-for="i in 5" :key="i" src="/images/yellow-star.svg" class="h-4" alt="yellow-star.svg-Img" />
        </div>
        <p class="font-bold">"{{ reviewText }}"
        </p>
        <p class="flex justify-between font-bold text-xl"> - {{ name }}
            <span class="flex gap-1 text-sm items-center text-[#0EB400]">
                <img src="/images/subtract.svg" class="h-4" alt="subtract.svg-Img" /> Verified Customer
            </span>
        </p>
    </div>
</template>