<template>
    <div class = "animated-input-container-main">
        <div class = "text">{{ hintText }}</div>
        <div style = "width: 20px;"></div>
        <div class = "animated-input-container">
            <input class = "animated-input-box" ref="inputBox">
            <div class = "animated-line" :class = "{ active: !isFocused }">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';

const props = defineProps({
    hintText: {
        type: String,
        required: true
    }
});

const isFocused = ref(false);
const inputBox = ref(null);

onMounted(() => {
    inputBox.value.addEventListener('focus', () => {
        isFocused.value = true;
    })
    inputBox.value.addEventListener('blur', () => {
        isFocused.value = false;
    })
});

</script>

<style scoped>
    /* remove black border on chrome when input focus */
    input, button, select, textarea {
        outline: none
    }
    
    .text {
        display: flex;
        height: 4vh;
        align-items: center; 
        color: white;
    }

    .animated-input-container-main {
        display: flex;
        height: 4vh;
        width: 30vw;
        margin: auto;
        
    }

    .animated-input-container {
        width: 25vw;
    }

    .animated-input-box {
        width: 100%;
        height: 3vh;
        border: none;
        color: white;
        background-color: transparent;
    }

    .animated-line {
        width: 100%;
        height: 0.25vh;
        border: none;
        background: linear-gradient(to right, #FC466B, #3F5EFB);
        transition: width 0.3s ease;
    }
    .animated-line.active {
        width: 0%;
    }
</style>