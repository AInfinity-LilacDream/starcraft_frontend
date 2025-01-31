<template>
    <div class = "container">
        <div class = "icon" ref = "rationdiv">{{ ration }}</div>
        <div style = "height: 10px;"></div>
        <div class = "text" v-if = "mmr != -1">{{ mmr }}</div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

const prop = defineProps({
    ration: {
        type: String,
        required: true
    },
    mmr: {
        type: Number,
        required: true
    },
    color: String
});

const rationdiv = ref(null);

onMounted(() => {
    rationdiv.value.style.backgroundColor = prop.color;
});

</script>

<style scoped>
:root {
    --color: white;
}

.container {
    margin: 10px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 60px;
    border-radius: 30px;
    transition: background-color 0.5s ease;
}
.container:hover {
    background-color: green;
}

.icon {
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 20px;
    color: white;
    border-radius: 10px;
}
</style>