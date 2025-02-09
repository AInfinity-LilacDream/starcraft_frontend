<template>
    <div class="login-form">
        <span class="login-text">登录</span>
        <form method="post">
            <input type="text" id="name" class="wInput" placeholder="用户名" required>
            <br>
            <input type="password" id="password" class="wInput" placeholder="密码" required>
        </form>
        <wSubmitButton text="登录" @click="userLogin"></wSubmitButton>
        <wTextButton text="验证码登录" @click="sendMessage" style="margin-top: 4vh;"></wTextButton>
        <wTextButton text="没有账号？马上注册" @click="registerMessage" class="login-register-text"></wTextButton>
    </div>
</template>

<script setup>
import wSubmitButton from './widgets/wSubmitButton.vue';
import wTextButton from './widgets/wTextButton.vue';

import '../css/widgets.css';

const emit = defineEmits(['changeMode', 'jumpToRegisterPage', 'userLogin']);

function sendMessage() {
    emit('changeMode');
}

function registerMessage() {
    emit('jumpToRegisterPage');
}

function userLogin() {
    emit('userLogin');
}
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

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 50%;
}

.login-text {
    margin-top: 14vh;
    color: var(--text-clr);
    font-size: 50px;
    align-self: center;
}

.login-register-text {
    position: absolute;
    bottom: 4vh;
    right: 3vw;
}
</style>