<template>
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
        <footer>
            <div class="match-footer">
                <div class="match-footer-button">
                    <a href="#"><span>提交我的赛事</span></a>
                    <div style="width: 80px;"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e8eaed">
                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                </div>
            </div>
        </footer>
    </main>
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

.match-footer {
    position: fixed;
    right: 20px;
    width: 100%;
    height: 30vh;
    background: linear-gradient(to top, var(--base-clr), var(--base-clr), transparent);
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.match-footer-button {
    position: relative;
    bottom: 3vh;
    right: 2vw;
    height: 80px;
    width: 300px;
    display: flex;
    font-size: 23px;
    justify-content: center;
    align-items: center;

    border: 4px solid var(--text-clr);
    transition: background-color 0.1s ease-in-out;

    svg {
        transition: fill 0.1s ease-in-out;
    }
}

.match-footer-button a {
    text-decoration: none;
    color: #e6e6ef;
    transition: color 0.1s ease-in-out;
}

.match-footer-button:hover {
    background-color: #e6e6ef;

    a {
        color: #11121a;
    }

    svg {
        fill: #11121a;
    }
}
</style>