<template>
    <div class="register-form">
        <span class="register-text">注册</span>
        <form method="post">
            <input type="text" id="name" class="register-input" placeholder="用户名" required>
            <br>
            <input type="password" id="password" class="register-input" placeholder="密码" required>
            <br>
            <input type="password" id="confirmPassword" class="register-input" placeholder="确认密码" required>
            <br>
            <input type="text" id="phone" class="register-input-2" placeholder="手机号" required>
            <button class="register-send-code">发送</button>
            <br>
            <input type="password" id="authCode" class="register-input" placeholder="验证码" required>
        </form>
        <wSubmitButton text="创建账号" style="margin-top: 4vh;"></wSubmitButton>
        <wTextButton text="已有账号？即刻登录" @click="jumpToLoginPage" style="margin-top: 3vh;"></wTextButton>
    </div>
</template>

<script setup>
import router from '@/router/router';

import wSubmitButton from './widgets/wSubmitButton.vue';
import wTextButton from './widgets/wTextButton.vue';

const emit = defineEmits(['changeMode', 'jumpToRegisterPage']);

function jumpToLoginPage() {
    router.push({ name: 'loginPage' });
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

.register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 50%;
}

.register-text {
    margin-top: 5vh;
    color: var(--text-clr);
    font-size: 50px;
    align-self: center;
}

.register-input {
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 20vw;
    font-size: 20px;
    color: var(--text-clr);
    margin-top: 4vh;
    background-color: transparent;
    border: none;
    border-bottom: 1px var(--line-clr) solid;
    height: 3vh;
    transition: border-bottom 0.2s ease;
}

.register-input:focus {
    border: none;
    border-bottom: 1px var(--accent-clr) solid;
}

.register-input-2 {
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 14vw;
    font-size: 20px;
    color: var(--text-clr);
    margin-top: 4vh;
    background-color: transparent;
    border: none;
    border-bottom: 1px var(--line-clr) solid;
    height: 3vh;
    transition: border-bottom 0.2s ease;
}

.register-input-2:focus {
    border: none;
    border-bottom: 1px var(--accent-clr) solid;
}

.register-send-code {
    margin-left: 1vw;
    border: none;
    border-radius: 5px;
    color: var(--text-clr);
    background-color: var(--accent-clr);
    height: 4vh;
    width: 5vw;
}

.register-submit-button {
    margin-top: 4vh;
    width: 20vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-clr);
    border: none;
    color: var(--text-clr);
    border-radius: 8px;
}

.register-change-text {
    text-decoration: none;
    color: var(--accent-clr);
    margin-top: 4vh;
    transition: color 0.1s ease;
}

.register-change-text:hover {
    color: var(--text-clr);
}
</style>