<template>
    <div class="profile-edit-container">
        <div class="profile-edit-picture" @click="selectProfilePicture">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed">
                <path
                    d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h405l-60 60H180v600h600v-348l60-60v408q0 24-18 42t-42 18H180Zm300-360ZM360-360v-170l382-382q9-9 20-13t22-4q11 0 22.32 4.5Q817.63-920 827-911l83 84q8.61 8.96 13.3 19.78 4.7 10.83 4.7 22.02 0 11.2-4.5 22.7T910-742L530-360H360Zm508-425-84-84 84 84ZM420-420h85l253-253-43-42-43-42-252 251v86Zm295-295-43-42 43 42 43 42-43-42Z" />
            </svg>
            <div class="profile-edit-picture-mask"></div>
        </div>
        <form class="profile-edit-form">
            <input type="text" placeholder="昵称" class="wInput">
            <input type="text" placeholder="QQ" class="wInput">
            <input type="text" placeholder="MMR" class="wInput">
            <input type="text" placeholder="种族" class="wInput">
        </form>
        <wSubmitButton text="保存修改"></wSubmitButton>
    </div>
</template>

<script setup>
import wSubmitButton from './widgets/wSubmitButton.vue';

import '../css/widgets.css';

function selectProfilePicture() {

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

.profile-edit-container {
    box-sizing: border-box;
    padding: 50px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-edit-picture {
    position: relative;
    height: 30vh;
    width: 30vh;
    border-radius: 50%;
    background-image: url('../assets/pics/profile-image.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s ease;

    svg {
        fill: var(--text-clr);
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 2;
        pointer-events: none;
    }
}

.profile-edit-picture:hover {
    svg {
        opacity: 1;
    }
}

.profile-edit-picture-mask {
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    opacity: 0;
    transition: 0.2s ease;
}

.profile-edit-picture-mask:hover {
    opacity: 1;
}

.profile-edit-form {
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
}
</style>