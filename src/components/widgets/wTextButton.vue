<template>
    <div class="wTextButton" ref="wTextButton">{{ text }}</div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const wSubmitButton = ref(null);

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    fontSize: {
        type: String,
        required: false,
        default: undefined
    },
});

onMounted(() => {
    if (props.fontSize != undefined) {
        wSubmitButton.value.style.fontSize=props.fontSize;
    }
    if (props.width != undefined) {
        wSubmitButton.value.style.width=props.width;
    }
})
</script>

<style>
.wTextButton {
    text-decoration: none;
    color: var(--accent-clr);
    transition: color 0.1s ease;
}
.wTextButton:hover {
    color: var(--text-clr);
}
</style>