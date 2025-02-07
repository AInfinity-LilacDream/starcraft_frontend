<template>
    <div class="profile-edit-container">
        <form>
            <input class="profile-edit-input">
        </form>
    </div>
</template>

<script setup>
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

.profile-edit-input {
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

.profile-edit-container {
    height: 100%;
    width: 100%;
}
</style>