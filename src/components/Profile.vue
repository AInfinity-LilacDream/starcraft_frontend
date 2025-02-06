<template>
    <div class="profile-container">
        <div class="profile-header-container">
            <div class="profile-header-bk"></div>
            <div class="profile-header-avatar"></div>
        </div>
        <div class = "profile-info">
            <span class = "profile-title">AInfinity-LilacDream</span>
            <br>
            <span class = "profile-signiture">“那我就祝他们，无知者谨慎，聪慧者勇敢，相爱者自由。”</span>

            <span></span>
        </div>
    </div>
</template>

<script setup>
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
    background-color: palegoldenrod;
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
</style>