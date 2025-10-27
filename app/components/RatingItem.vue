<script setup lang="ts">
const props = defineProps({
    label: String,
    rating: Number,
    totalStars: {
        type: Number,
        default: 5
    }
})
</script>

<template>
    <p class="flex justify-between items-center">
        {{ label }}
        <span class="flex items-center gap-0">
            <NuxtImg v-for="star in totalStars" :key="star" src="/images/yellow-star.svg" class="h-4"
                :class="star === totalStars ? 'mr-1' : ''" alt="star" />
            {{ rating }}
        </span>
    </p>
</template>