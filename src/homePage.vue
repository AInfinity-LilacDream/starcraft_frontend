<template>
    <div class="container">
        <ul>
            <li class = "active"><a href="#"><span>1v1</span></a></li>
            <li><a href="#"><span>2v2</span></a></li>
            <li><a href="#"><span>3v3</span></a></li>
            <li><a href="#"><span>4v4</span></a></li>
            <li><a href="#"><span>5v5</span></a></li>
            <div id="marker" ref="marker"></div>
        </ul>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
const marker = ref(null);

onMounted(() => {
    let list = document.querySelectorAll('ul li');

    const globalOffsetTop = 40;

    function moveIndicator(e) {
        marker.value.style.top = (e.offsetTop + globalOffsetTop) + 'px';
        marker.value.style.height = e.offsetHeight + 'px';
    }

    // add active class in hovered list item
    function activeLink() {
        list.forEach((item) => {
            item.classList.remove('active');
            this.classList.add('active');
        })
    }

    list.forEach(link => {
        link.addEventListener('click', (e) => {
            moveIndicator(e.target);
        })
        link.addEventListener('click', activeLink);
    })
})
</script>

<style scoped>
.container {
    position: fixed;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #1e2759;
}

ul {
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
}

ul li {
    list-style: none;
}

ul li a {
    position: relative;
    display: flex;
    align-items: center;
    color: white;
    min-height: 8vh;
    background: rgba(0, 0, 0, 0.4);
    text-decoration: none;
    backdrop-filter: blur(15px);
    padding: 20px 30px;
    z-index: 1000;
}

ul li a span {
    font-size: 1.5em;
    pointer-events: none;
    opacity: 0.25;
    transition: 0.25s;
}

ul li.active a span {
    opacity: 1;
}

#marker {
    position: absolute;
    top: 40px;
    left: 100%;
    transition: 0.25s;
    z-index: 1;
}

#marker::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 50px;
    border-radius: 8px;
}

ul li:nth-child(1).active~#marker::before {
    background: red;
    box-shadow: 0 0 15px red,
        0 0 30px red,
        0 0 45px red,
        0 0 60px red;
}

ul li:nth-child(2).active~#marker::before {
    background: blue;
    box-shadow: 0 0 15px blue,
        0 0 30px blue,
        0 0 45px blue,
        0 0 60px blue;
}

ul li:nth-child(3).active~#marker::before {
    background: green;
    box-shadow: 0 0 15px green,
        0 0 30px green,
        0 0 45px green,
        0 0 60px green;
}

ul li:nth-child(4).active~#marker::before {
    background: yellow;
    box-shadow: 0 0 15px yellow,
        0 0 30px yellow,
        0 0 45px yellow,
        0 0 60px yellow;
}

ul li:nth-child(5).active~#marker::before {
    background: purple;
    box-shadow: 0 0 15px purple,
        0 0 30px purple,
        0 0 45px purple,
        0 0 60px purple;
}
</style>