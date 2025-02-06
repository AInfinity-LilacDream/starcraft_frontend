<template>
    <div class="login-large-container">
        <div class="login-container">
            <div class="login-png-container"></div>
            <Register />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import Register from './components/Register.vue';

const router = useRouter();

</script>

<style>
input,
button,
select,
textarea {
    outline: none;
}

body,
html,
#app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

:root {
    --base-clr: #11121a;
    --line-clr: #42434a;
    --hover-clr: #222533;
    --text-clr: #e6e6ef;
    --accent-clr: #5e63ff;
    --secondary-text-clr: #b0b3c1;
}

* {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
}

.login-large-container {
    border-radius: 0;
    box-sizing: border-box;
    background: linear-gradient(to right, #1D4350, #A43931);
    height: 100%;
    width: 100%;
}

.login-container {
    overflow: hidden;
    display: flex;
    position: absolute;
    top: calc(50% - 37.5vh);
    left: calc(50% - 37.5vw);
    height: 75vh;
    width: 75vw;
    box-sizing: border-box;
    background-color: var(--base-clr);
    border-radius: 40px;
}

.login-png-container {
    height: 100%;
    width: 50%;
    background: url("./assets/pics/login-cover.jpg") no-repeat -290px;
    background-size: cover;
    border-radius: 40px;
}

.slide-fade-enter-active {
    transition: transform 0.2s ease-in-out, opacity 0.05s ease-in 0.1s;
}

.slide-fade-leave-active {
    transition: transform 0.2s ease-in-out, opacity 0.1s ease-out;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateX(50%);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-50%);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>