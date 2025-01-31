<template>
  <div class = "container">
    <div class = "input-container">
      <div style = "height: 6vh;"></div>
      <div class = "title">PCEC.club</div>
      <div style = "height: 6vh;"></div>
      <AnimatedInput hint-text="账号" />
      <div style = "height: 3vh;"></div>
      <AnimatedInput hint-text="密码" />
      <div style = "height: 3vh;"></div>
      <AnimatedButton hintText="登录" @click = "login" />
      <div style = "height: 5vh;"></div>
      <div class = "divider"></div>
      <div class = "footer-container">
        <div class = "footer-font-left">忘记密码？</div>
        <div class = "footer-font-right">注册账号</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import AnimatedButton from './components/AnimatedButton.vue';
import AnimatedInput from './components/AnimatedInput.vue';

const router = useRouter();

function login() {
  router.push('/homePage');
}

</script>

<style scoped>
  .divider {
    width: 35vw;
    height: 0.1vh;
    background-color: rgba(76, 76, 76, 0.4);
    margin: auto;
  }

  .footer-container {
    font-size: 15px;
    position: relative;
    margin: auto;
    height: 10vh;
    width: 30vw;
    color: white;
    display: flex;
  }

  .footer-font-left {
    position: absolute;
    left: 0px;
    top: calc(50% - 10px);
  }

  .footer-font-right {
    position: absolute;
    right: 0px;
    top: calc(50% - 10px);
  }

  .title {
    text-align: center;
    color: white;
    font-size: 30px;
  }

  .container {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(45deg, #4568DC, #B06AB3);
  }

  .input-container {
    box-shadow: 0 0 80px 10px #2b2e4a;
    position: absolute;
    top: calc(50% - 40vh);
    left: calc(50% - 20vw);
    background: #2b2e4a;
    height: 80vh;
    width: 40vw;
  }
</style>
