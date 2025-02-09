<template>
    <div class="wSubmitButton" ref="wSubmitButton">{{ text }}</div>
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
    width: {
        type: String,
        required: false,
        default: undefined
    }
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
.wSubmitButton {
    margin-top: 6vh;
    width: 20vw;
    height: 5vh;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-clr);
    border: none;
    color: var(--text-clr);
    border-radius: 8px;
}
</style>