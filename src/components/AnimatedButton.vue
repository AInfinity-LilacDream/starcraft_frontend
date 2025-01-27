<template>
    <button class = "animated-button">{{ hintText }}</button>
</template>

<script setup>

const props = defineProps({
    hintText: {
        type: String,
        required: true
    }
});

</script>

<style scoped>
    .animated-button {
        margin: auto;
        height: 4vh;
        width: 6vw;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        color: white;
        background: transparent;
        border: 2px solid;
        border-image-source: linear-gradient(to right, #FC466B, #3F5EFB);
        border-image-slice: 1;
        padding: 10px;
    }
    .animated-button:hover {
        background: linear-gradient(to right, #FC466B, #3F5EFB);
        color: #2b2e4a;
    }
</style>