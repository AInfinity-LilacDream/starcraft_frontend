<template>
    <div class="profile-container">
        <div class="profile-header-container">
            <div class="profile-header-bk"></div>
            <div class="profile-header-avatar"></div>
        </div>
        <div class="profile-info">
            <div class="profile-title-container">
                <span class="profile-title">AInfinity-LilacDream</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#e8eaed" @click = "jumpToProfileEditPage" id = "edit-svg">
                    <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                </svg>
            </div>
            <br>
            <span class="profile-signiture">“那我就祝他们，无知者谨慎，聪慧者勇敢，相爱者自由。”</span>
            <br>
            <br>
            <br>
            <br>
            <span style="margin-left: 10px;">QQ: 1977741520</span>
            <br>
            <span style="margin-left: 10px;">MMR: 3000</span>
            <br>
            <span style="margin-left: 10px;">种族：人族</span>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['jumpToProfileEditPage']);

function jumpToProfileEditPage() {
    emit('jumpToProfileEditPage');
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
}

* {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
}

.profile-container {
    height: 100%;
    width: 100%;
}

.profile-header-container {
    position: relative;
    height: 35vh;
    width: 100%;
}

.profile-header-bk {
    background: url("../assets/pics/login-cover.jpg") no-repeat 0 -200px;
    background-size: cover;
    height: 27.5vh;
    width: 100%;
}

.profile-header-avatar {
    position: absolute;
    top: 15vh;
    height: 20vh;
    width: 20vh;
    background-image: url('../assets/pics/profile-image.png');
    background-size: cover;
    left: calc(50% - 10vh - 5px);
    border-radius: 50%;
    border: 10px var(--base-clr) solid;
    background-clip: padding-box;
}

.profile-info {
    box-sizing: border-box;
    margin: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.profile-title {
    font-size: 50px;
}

.profile-signiture {
    margin-top: -1.5vh;
    font-size: 16px;
}

.profile-title-container {
    display: flex;
    flex-direction: row;

    svg {
        margin-top: 26px;
        margin-left: 10px;
        fill: var(--secondary-text-clr);
        transition: fill 0.2s ease;
    }
}

#edit-svg:hover {
    fill: var(--accent-clr);
}
</style>