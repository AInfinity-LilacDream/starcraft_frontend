<template>
    <div class="record-cheater-container">
        <span class="record-cheater-title">登记外挂</span>
        <div style="height: 40px;"></div>
        <form style="display: flex; flex-direction: column;">
            <span class="record-cheater-subtitle">·用户名</span>
            <input class="record-cheater-input" type="text" placeholder="战网ID（XXX#1234）">
            <span class="record-cheater-subtitle">·外挂类型</span>
            <div class="record-cheater-option" @click="selectCheatMode(1)">
                <svg v-show="option1 == false" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#e8eaed">
                    <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z" />
                </svg>
                <svg v-show="option1 == true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#e8eaed">
                    <path
                        d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                </svg>
                <span class="record-cheater-text">开图</span>
            </div>
            <div class="record-cheater-option" @click="selectCheatMode(2)">
                <svg v-show="option2 == false" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#e8eaed">
                    <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z" />
                </svg>
                <svg v-show="option2 == true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="#e8eaed">
                    <path
                        d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                </svg>
                <span class="record-cheater-text">建造列表</span>
            </div>
            <div class="record-cheater-option">
                <span class="record-cheater-text">其他</span><input class="record-cheater-input-2" type="text"
                    placeholder="请详细描述外挂行为...">
            </div>
        </form>
        <wSubmitButton text="递交！我们将会核验并记录违规行为" fontSize="14px"></wSubmitButton>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import wSubmitButton from './widgets/wSubmitButton.vue';

const option1 = ref(false);
const option2 = ref(false);

function selectCheatMode(el) {
    if (el == 1) option1.value = !option1.value;
    else if (el == 2) option2.value = !option2.value;
}
</script>

<style>
:root {
    --base-clr: #11121a;
    --line-clr: #42434a;
    --hover-clr: #222533;
    --text-clr: #e6e6ef;
    --accent-clr: #5e63ff;
    --secondary-text-clr: #b0b3c1;

    --sidebar-width: calc(250px - 2em);
}

* {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
}

.record-cheater-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 40px;
    box-sizing: border-box;
}

.record-cheater-title {
    color: var(--text-clr);
    font-size: 50px;
}

.record-cheater-input {
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 20vw;
    font-size: 15px;
    color: var(--text-clr);
    margin: 2vh;
    background-color: transparent;
    border: none;
    border-bottom: 1px var(--line-clr) solid;
    height: 3vh;
    transition: border-bottom 0.2s ease;
}

.record-cheater-input:focus {
    border: none;
    border-bottom: 1px var(--accent-clr) solid;
}

.record-cheater-input-2 {
    box-sizing: border-box;
    width: 20vw;
    font-size: 15px;
    margin-left: 10px;
    color: var(--text-clr);
    background-color: transparent;
    border: none;
    border-bottom: 1px var(--line-clr) solid;
    height: 3vh;
    transition: border-bottom 0.2s ease;
    padding-bottom: 3px;
}

.record-cheater-input-2:focus {
    border: none;
    border-bottom: 1px var(--accent-clr) solid;
}

.record-cheater-subtitle {
    margin-top: 20px;
    font-size: 25px;
    color: var(--text-clr);
}

.record-cheater-option {
    margin-top: 20px;
    margin-left: 15px;
    display: flex;
    flex-direction: row;
    gap: 7px;
    color: var(--text-clr);
    transition: color 0.2s ease;

    svg {
        fill: var(--text-clr);
        transition: fill 0.2s ease;
    }
}

.record-cheater-option:hover {
    color: var(--accent-clr);

    svg {
        fill: var(--accent-clr);
    }
}
</style>