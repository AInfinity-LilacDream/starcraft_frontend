<template>
    <div class = "wide-container">
        <span class = "upper-text">2v2对战</span>

        <div style="height: 100px;"></div>
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
            <ClassDiv ration="T" mmr="4000" color="#B0D0D3"></ClassDiv>
            <ClassDiv ration="P" mmr="4000" color="#C08497"></ClassDiv>
            <ClassDiv ration="Z" mmr="4000" color="#F7AF9D"></ClassDiv>
            <ClassDiv ration="R" mmr="4000" color="#F7E3AF"></ClassDiv>
        </div>
        <div style="height: 100px;"></div>
        <AnimatedButton hint-text="开始匹配"></AnimatedButton>
    </div>
</template>

<script setup>
import './ClassDiv.vue';
import './AnimatedButton.vue';
import ClassDiv from './ClassDiv.vue';
import AnimatedButton from './AnimatedButton.vue';

</script>

<style scoped>
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
    border-radius: 75px;
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