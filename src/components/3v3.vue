<template>
    <div class="wide-container">
        <span class="upper-text">> 3v3对战 <</span>
        <div style="height: 50px;"></div>
        <div class="filter">
            <span class="class-text">匹配分数区间：</span>
            <div style="width: 20px;"></div>
            <i class="fas fa-filter icon-filter"></i>
            <input type="number" class="score-filter"></input>
            <span style="width: 40px; display: flex; justify-content: center;">~</span>
            <input type="number" class="score-filter"></input>
        </div>
        <div style="height: 20px;"></div>
        <div class="class-container">
            <span class="class-text">你的种族：</span>
            <div style="width: 20px;"></div>
            <ClassDiv ration="T" mmr="4000" color="#B0D0D3"></ClassDiv>
            <ClassDiv ration="P" mmr="4000" color="#C08497"></ClassDiv>
            <ClassDiv ration="Z" mmr="4000" color="#F7AF9D"></ClassDiv>
            <ClassDiv ration="R" mmr="4000" color="#F7E3AF"></ClassDiv>
        </div>
        <div style="height: 20px;"></div>
        <div class="class-container">
            <span class="class-text">对手种族：</span>
            <div style="width: 20px;"></div>
            <ClassDiv ration="T" mmr="-1" color="#B0D0D3"></ClassDiv>
            <ClassDiv ration="P" mmr="-1" color="#C08497"></ClassDiv>
            <ClassDiv ration="Z" mmr="-1" color="#F7AF9D"></ClassDiv>
            <ClassDiv ration="R" mmr="-1" color="#F7E3AF"></ClassDiv>
        </div>
        <div style="height: 50px;"></div>
        <AnimatedButton hint-text="开始匹配"></AnimatedButton>
    </div>
</template>

<script setup>
import './ClassDiv.vue';
import './AnimatedButton.vue';
import ClassDiv from './ClassDiv.vue';
import AnimatedButton from './AnimatedButton.vue';
import '@fortawesome/fontawesome-free/css/all.css';

</script>

<style scoped>
input, button, select, textarea {
    outline: none
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}

.icon-filter {
    width: 50px;
}

.score-filter {
    height: 35px;
    width: 75px;
    background-color: black;
    border: none;
    color: white;
}

.filter {
    height: 75px;
    width: 500px;
    display: flex;
    border-radius: 37.5px;
    align-items: center;
    justify-content: center;
    background-color: #011628;
    color: white;
}

.wide-container {
    box-shadow: 0 0 80px 10px black;
    position: absolute;
    height: 80vh;
    width: 40vw;
    top: calc(50% - 40vh);
    left: calc(50% - 20vw);
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.class-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 125px;
    width: 500px;
    background-color: #011628;
    border-radius: 30px;
}

.class-text {
    font-size: small;
    color: white;
}

.upper-text {
    color: white;
    font-size: 40px;
}
</style>