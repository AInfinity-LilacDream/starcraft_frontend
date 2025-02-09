<template>
    <div class="tutorial-container">
        <span class="tutorial-title">最新视频</span>
        <iframe
            src="//player.bilibili.com/player.html?isOutside=true&aid=656812368&bvid=BV1bh4y1d74T&cid=1149755730&p=1&autoplay=0"
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
            class="tutorial-video"></iframe>
        <iframe
            src="//player.bilibili.com/player.html?isOutside=true&aid=656812368&bvid=BV1bh4y1d74T&cid=1149755730&p=1&autoplay=0"
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
            class="tutorial-video"></iframe>
        <iframe
            src="//player.bilibili.com/player.html?isOutside=true&aid=656812368&bvid=BV1bh4y1d74T&cid=1149755730&p=1&autoplay=0"
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
            class="tutorial-video"></iframe>
        <iframe
            src="//player.bilibili.com/player.html?isOutside=true&aid=656812368&bvid=BV1bh4y1d74T&cid=1149755730&p=1&autoplay=0"
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
            class="tutorial-video"></iframe>
        <iframe
            src="//player.bilibili.com/player.html?isOutside=true&aid=656812368&bvid=BV1bh4y1d74T&cid=1149755730&p=1&autoplay=0"
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
            class="tutorial-video"></iframe>
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

    --sidebar-width: calc(250px - 2em);
}

* {
    margin: 0;
    padding: 0;
    line-height: 1.5em;
}

.tutorial-video {
    margin: 40px;
    width: 800px;
    height: 450px;
}

.tutorial-title {
    margin: 40px;
    font-size: 50px;
}

.tutorial-container {
    display: flex;
    flex-direction: column;
}
</style>