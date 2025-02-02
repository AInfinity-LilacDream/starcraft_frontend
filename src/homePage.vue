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
                <li class="active">
                    <button @click="toggleSubMenu" class="dropdown-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e8eaed">
                            <path
                                d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z" />
                        </svg>
                        <span>对战</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#e8eaed">
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                    </button>
                    <ul class="sub-menu">
                        <div>
                            <li><a href="#">1v1</a></li>
                            <li><a href="#">2v2</a></li>
                            <li><a href="#">3v3</a></li>
                            <li><a href="#">4v4</a></li>
                        </div>
                    </ul>
                </li>
                <li>
                    <a href = "#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z"/></svg>
                        <span>合作任务</span>
                    </a>
                </li>
                <li>
                    <a href = "#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q41-45 62.5-100.5T800-480q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
                        <span>赛事宣传</span>
                    </a>
                </li>
                <li>
                    <a href = "#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z"/></svg>
                        <span>教学视频</span>
                    </a>
                </li>
                <li>
                    <a href = "#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m380-340 280-180-280-180v360Zm-60 220v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                        <span>直播间</span>
                    </a>
                </li>
            </ul>
        </aside>
        <main>
            <div class="container">
                <h2>StarCraftII： 赛事</h2>
                <p>2010年，《星际争霸2:自由之翼》正式发售，暴雪其后分别于2013年和2015年推出其DLC《星际争霸2:虫群之心》及《星际争霸2:虚空之遗》。作为开创了现代职业电子竞技体系的星际争霸1的续作，星际2自诞生之初就与电竞高度绑定，其作为电竞项目的历史十分悠久，从2010年至今大致可以划分为3各阶段。
                </p>
            </div>
            <div class="container">
                <h2>StarCraftII： 赛事</h2>
                <p>2010年，《星际争霸2:自由之翼》正式发售，暴雪其后分别于2013年和2015年推出其DLC《星际争霸2:虫群之心》及《星际争霸2:虚空之遗》。作为开创了现代职业电子竞技体系的星际争霸1的续作，星际2自诞生之初就与电竞高度绑定，其作为电竞项目的历史十分悠久，从2010年至今大致可以划分为3各阶段。
                </p>
            </div>
            <div class="container">
                <h2>StarCraftII： 赛事</h2>
                <p>2010年，《星际争霸2:自由之翼》正式发售，暴雪其后分别于2013年和2015年推出其DLC《星际争霸2:虫群之心》及《星际争霸2:虚空之遗》。作为开创了现代职业电子竞技体系的星际争霸1的续作，星际2自诞生之初就与电竞高度绑定，其作为电竞项目的历史十分悠久，从2010年至今大致可以划分为3各阶段。
                </p>
            </div>
            <div class="container">
                <h2>StarCraftII： 赛事</h2>
                <p>2010年，《星际争霸2:自由之翼》正式发售，暴雪其后分别于2013年和2015年推出其DLC《星际争霸2:虫群之心》及《星际争霸2:虚空之遗》。作为开创了现代职业电子竞技体系的星际争霸1的续作，星际2自诞生之初就与电竞高度绑定，其作为电竞项目的历史十分悠久，从2010年至今大致可以划分为3各阶段。
                </p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const sidebarBtn = ref(null);
const sidebar = ref(null);

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
    sidebarBtn.value.classList.toggle('rotate')

    Array.from(sidebar.value.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate')
    })
}

onMounted(() => {
})
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
#sidebar.close {
    padding: 5px;
    width: 60px;
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

#sidebar ul li.active a {
    color: var(--accent-clr);

    svg {
        fill: var(--accent-clr);
    }
}

#sidebar a,
#sidebar .dropdown-btn,
#sidebar .logo {
    border-radius: .5em;
    padding: .85em;
    text-decoration: none;
    color: var(--text-clr) !important;
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
</style>