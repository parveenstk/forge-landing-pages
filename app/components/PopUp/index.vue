<script setup lang="ts">
const step = ref(1);
const updateStep = (currentStep: number) => {
    step.value = currentStep;
}
</script>
<template>
    <PopUpOne v-if="step === 1" :step="step" :update-step="updateStep" />
    <PopUpTwo v-if="step === 2" :step="step" :update-step="updateStep" />
    <PopUpThree v-if="step === 3" :step="step" :update-step="updateStep" />
    <PopUpFour v-if="step === 4" :step="step" :update-step="updateStep" />
    <PopUpFive v-if="step === 5" :step="step" :update-step="updateStep" />
</template>