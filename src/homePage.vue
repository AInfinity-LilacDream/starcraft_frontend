<template>
    <div class="divbody">
        <aside id="sidebar" ref="sidebar">
            <ul>
                <li>
                    <span class="logo">StarCraftII</span>
                    <button id="toggle-btn" @click="toggleSidebar" ref="sidebarBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e8eaed">
                            <path
                                d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
                        </svg>
                    </button>
                </li>
                <li>
                    <button @click="toggleSubMenu" class="dropdown-btn active" :ref="el => tile[1] = el" id="1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e8eaed">
                            <path
                                d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                        </svg>
                        <span>约战</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e8eaed">
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                    </button>
                    <ul class="sub-menu">
                        <div>
                            <li><a href="#" @click="switchPage" :ref="el => tile[2] = el" id="2" class="active ">1v1</a>
                            </li>
                            <li><a href="#" @click="switchPage" :ref="el => tile[3] = el" id="3">2v2</a></li>
                            <li><a href="#" @click="switchPage" :ref="el => tile[4] = el" id="4">3v3</a></li>
                            <li><a href="#" @click="switchPage" :ref="el => tile[5] = el" id="5">4v4</a></li>
                            <li>
                                <a href="#" @click="switchPage" :ref="el => tile[6] = el" id="6">
                                    <span>合作任务</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </li>
                <li>
                    <a href="#" @click="switchPage" :ref="el => tile[7] = el" id="7">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e8eaed">
                            <path
                                d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" />
                        </svg>
                        <span>赛事宣传</span>
                    </a>
                </li>
                <li>
                    <a href="#" @click="switchPage" :ref="el => tile[8] = el" id="8">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e8eaed">
                            <path
                                d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z" />
                        </svg>
                        <span>教学视频</span>
                    </a>
                </li>
                <li>
                    <a href="#" @click="switchPage" :ref="el => tile[9] = el" id="9">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e8eaed">
                            <path
                                d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                        </svg>
                        <span>外挂图鉴</span>
                    </a>
                </li>
                <li id="profile-image" v-show="isLogin == true">
                    <a href="#" @click="switchPage" :ref="el => tile[10] = el" id="10">
                        <div class="profile-image"></div>
                        <span>个人信息</span>
                    </a>
                </li>
                <li id="profile-image" v-show="isLogin == false">
                    <a href="#" @click="jumpToLoginPage">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                        <span>登入</span>
                    </a>
                </li>
            </ul>
        </aside>
        <main>
            <findMatch v-if="id >= 2 && id <= 5 && !profileEditMode" :mode="`${id - 1}v${id - 1}`"></findMatch>
            <matchInfo v-if="id == 7 && !profileEditMode"></matchInfo>
            <Profile v-if="id == 10 && !profileEditMode" @jumpToProfileEditPage="jumpToProfileEditPage"></Profile>
            <ProfileEdit v-if="profileEditMode"></ProfileEdit>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import findMatch from './components/FindMatch.vue';
import matchInfo from './components/MatchInfoPublicity.vue';
import Profile from './components/Profile.vue';
import ProfileEdit from './components/ProfileEdit.vue';
import router from './router/router';

let currentPage = 2;

const sidebarBtn = ref(null);
const sidebar = ref(null);
const profileEditMode = ref(false);
const isLogin = ref(false);

const tile = ref([]);

var id = 2;

function toggleSubMenu(event) {
    event.currentTarget.nextElementSibling.classList.toggle('show')
    event.currentTarget.classList.toggle('rotate')

    if (sidebar.value.classList.contains('close')) {
        sidebar.value.classList.toggle('close')
        sidebarBtn.value.classList.toggle('rotate')
    }
}

function toggleSidebar() {
    sidebar.value.classList.toggle('close')
    if (sidebar.value.classList.contains('close')) document.documentElement.style.setProperty('--sidebar-width', '50px')
    else document.documentElement.style.setProperty('--sidebar-width', '218px')
    sidebarBtn.value.classList.toggle('rotate')

    Array.from(sidebar.value.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function switchPage(event) {
    if (event.currentTarget.classList.contains("active")) {
        return;
    }

    profileEditMode.value = false;
    for (let i = 1; i <= 10; i++) {
        tile.value[i].classList.remove('active');
    }

    id = parseInt(event.currentTarget.id);
    tile.value[id].classList.toggle('active');
    if (id >= 2 && id <= 6) tile.value[1].classList.toggle('active');
}

function jumpToProfileEditPage() {
    profileEditMode.value = true;
}

function jumpToLoginPage() {
    router.push({ name: 'loginPage' });
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

    --sidebar-width: calc(250px - 2em);
}

* {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
}

.divbody {
    min-height: 100vh;
    min-height: 100dvh;
    background-color: var(--base-clr);
    color: var(--text-clr);
    display: grid;
    grid-template-columns: auto 1fr;
}

main {
    padding: min(30px, 7%);
}

main p {
    color: #b0b3c1;
    margin-top: 5px;
    margin-bottom: 15px;
}

.container {
    border: 1px solid var(--line-clr);
    border-radius: 1em;
    margin-bottom: 20px;
    padding: min(3em, 15%);

    h2,
    p {
        margin-top: 1em;
    }
}

#sidebar {
    box-sizing: border-box;
    height: 100vh;
    width: 250px;
    padding: 5px 1em;
    background-color: var(--base-clr);
    border-right: 1px solid var(--line-clr);

    position: sticky;
    top: 0;
    align-self: self-start;
    transition: 300ms ease-in-out;
    overflow: hidden;
    text-wrap: nowrap;
}

#sidebar * {
    transition: color 100ms ease-in-out, background-color 100ms ease-in-out, fill 100ms ease-in-out;
}

#sidebar.close {
    padding: 5px;
    width: 60px;
}

.active {
    color: var(--accent-clr) !important;
}

.active svg {
    fill: var(--accent-clr) !important;
}

#sidebar ul {
    list-style: none;
}

#sidebar>ul>li:first-child {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;

    .logo {
        font-weight: 600;
    }
}

#sidebar a,
#sidebar .dropdown-btn,
#sidebar .logo {
    border-radius: .5em;
    padding: .85em;
    text-decoration: none;
    color: var(--text-clr);
    display: flex;
    align-items: center;
    gap: 1em;
}

#sidebar svg {
    flex-shrink: 0;
    fill: var(--text-clr);
}

#sidebar a span,
#sidebar .dropdown-btn span {
    flex-grow: 1;
}

#sidebar a:hover,
#sidebar .dropdown-btn:hover {
    background-color: var(--hover-clr);
}

#sidebar .sub-menu {
    display: grid;
    transition: 300ms ease-in-out;
    grid-template-rows: 0fr;

    >div {
        overflow: hidden;
    }
}

#sidebar .sub-menu.show {
    grid-template-rows: 1fr;
}

#sidebar .sub-menu a {
    padding-left: 2em;
}

.rotate svg:last-child {
    rotate: 180deg;
}


.dropdown-btn {
    width: 100%;
    text-align: left;
    background-color: transparent;
    border: none;
    font: inherit;
    cursor: pointer;
}

.dropdown-btn svg {
    transition: 200ms ease;
}

#toggle-btn {
    margin-left: auto;
    padding: 1em;
    border: none;
    border-radius: .5em;
    background: transparent;
    cursor: pointer;

    svg {
        transition: rotate 150ms ease;
    }
}

#toggle-btn:hover {
    background-color: var(--hover-clr);
}

.profile-image {
    flex-shrink: 0;
    height: 24px;
    width: 24px;
    background-image: url('./assets/pics/profile-image.png');
    background-size: cover;
    border-radius: 50%;
}

#profile-image {
    width: var(--sidebar-width);
    position: absolute;
    bottom: 24px;
}
</style>