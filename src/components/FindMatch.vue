<template>
    <div class="class-container">
        <div class="player-class">
            <div class="top-container">
                <span class="hint-text">你的种族</span>
                <div style="width: 20px;"></div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#e8eaed">
                    <path
                        d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                </svg>
                <div style="width: 20px;"></div>
                <span class="hint-text">MMR: 4000</span>
            </div>
            <div class="player-class-2">
                <div class="class-selection">
                    <img src="../assets/icons/human.png">
                    <div class="class-text">人类</div>
                </div>
                <div class="class-selection">
                    <img src="../assets/icons/insect.png">
                    <div class="class-text">异虫</div>
                </div>
                <div class="class-selection">
                    <img src="../assets/icons/god.png">
                    <div class="class-text">星灵</div>
                </div>
                <div class="class-selection">
                    <img src="../assets/icons/human.png">
                    <div class="class-text">随机</div>
                </div>
            </div>
        </div>
        <div class="player-class">
            <span class="hint-text top-container">你的对手</span>
            <div class="player-class-2">
                <div class="class-selection-2">
                    <img src="../assets/icons/human.png">
                    <div class="class-text">人类</div>
                </div>
                <div class="class-selection-2">
                    <img src="../assets/icons/insect.png">
                    <div class="class-text">异虫</div>
                </div>
                <div class="class-selection-2">
                    <img src="../assets/icons/god.png">
                    <div class="class-text">星灵</div>
                </div>
                <div class="class-selection-2">
                    <img src="../assets/icons/human.png">
                    <div class="class-text">随机</div>
                </div>
            </div>
        </div>
    </div>
    <div class="start-button-container">
        <div class="start-button">
            <a href="#"><span>开始匹配</span></a>
            <div style="width: 100px;"></div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
        </div>
        <div style="width: 30px;"></div>
        <span class = "match-text">{{ mode }}</span>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    mode: String,
});

onMounted(() => {
    Array.from(document.getElementsByClassName('class-selection')).forEach((el) => {
        el.addEventListener('click', () => {
            Array.from(document.getElementsByClassName('class-selection')).forEach((ele) => {
                ele.style.backgroundColor = "#1D2134";
                ele.style.color = "#e6e6ef";
            })
            el.style.backgroundColor = "#E0E0E0";
            el.style.color = "#11121a";
        })
    })
    Array.from(document.getElementsByClassName('class-selection-2')).forEach((el) => {
        el.addEventListener('click', () => {
            Array.from(document.getElementsByClassName('class-selection-2')).forEach((ele) => {
                ele.style.backgroundColor = "#1D2134";
                ele.style.color = "#e6e6ef";
            })
            el.style.backgroundColor = "#E0E0E0";
            el.style.color = "#11121a";
        })
    })
})
</script>

<style scoped>
:root {
    --base-clr: #11121a;
    --line-clr: #42434a;
    --hover-clr: #222533;
    --text-clr: #e6e6ef;
    --accent-clr: #5e63ff;
    --secondary-text-clr: #b0b3c1;
}

.start-button-container {
    margin: auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
}

.match-text {
    font-size: 25px;   
}

.top-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

.hint-text {
    font-size: 30px;
    color: #e6e6ef;
}

.class-container {
    margin: auto;
    display: flex;
    height: 80%;
    flex-direction: column;
    width: 920px;
}

.player-class {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.player-class-2 {
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
}

.class-selection {
    box-sizing: border-box;
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1D2134;
    transition: background-color 0.25s ease-in-out;
}

.class-selection:hover {
    background-color: #161927;
}

.class-selection-2 {
    box-sizing: border-box;
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1D2134;
    transition: background-color 0.25s ease-in-out;
}

.class-selection-2:hover {
    background-color: #161927;
}

.start-button {
    height: 80px;
    width: 300px;
    display: flex;
    font-size: 23px;
    justify-content: center;
    align-items: center;

    border: 4px solid #e6e6ef;
    transition: background-color 0.1s ease-in-out;

    svg {
        transition: fill 0.1s ease-in-out;
    }
}

.start-button a {
    text-decoration: none;
    color: #e6e6ef;
    transition: color 0.1s ease-in-out;
}

.start-button:hover {
    background-color: #e6e6ef;

    a {
        color: #11121a;
    }

    svg {
        fill: #11121a;
    }
}
</style>