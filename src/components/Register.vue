<template>
    <div class="login-form">
        <span class="login-text">注册</span>
        <form method="post">
            <input type="text" id="name" class="login-input" placeholder="用户名" required>
            <br>
            <input type="password" id="password" class="login-input" placeholder="密码" required>
            <br>
            <input type="password" id="confirmPassword" class="login-input" placeholder="确认密码" required>
            <br>
            <input type="text" id="name" class="login-input-2" placeholder="手机号" required>
            <button class="login-send-code">发送</button>
            <br>
            <input type="password" id="password" class="login-input" placeholder="验证码" required>
        </form>
        <input type="submit" value="创建账号" class="login-submit-button">
    </div>
</template>

<script setup>
const emit = defineEmits(['changeMode', 'jumpToRegisterPage']);

function sendMessage() {
    emit('changeMode');
}

function registerMessage() {
    emit('jumpToRegisterPage');
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
    margin-top: 7vh;
    color: var(--text-clr);
    font-size: 50px;
    align-self: center;
}

.login-input {
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
}

.login-input-2 {
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
}

.login-submit-button {
    margin-top: 6vh;
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

.login-change-text {
    text-decoration: none;
    color: var(--accent-clr);
    margin-top: 4vh;
    transition: color 0.1s ease;
}

.login-change-text:hover {
    color: var(--text-clr);
}

.login-register-text {
    position: absolute;
    bottom: 4vh;
    right: 3vw;
    text-decoration: none;
    color: var(--accent-clr);
    transition: color 0.1s ease;
}

.login-register-text:hover {
    color: var(--text-clr);
}
</style>