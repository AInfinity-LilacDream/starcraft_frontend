<template>
    <div class="cheater-list-container">
        <span class="cheater-list-title">外挂图鉴</span>
        <div style="height: 100px;"></div>
        <table>
            <tr>
                <th>头像</th>
                <th>ID</th>
                <th>MMR</th>
                <th>种族</th>
                <th>外挂类型</th>
            </tr>
            <tr>
                <td><img src="../assets/pics/profile-image.png" alt=""></td>
                <td>Amaris</td>
                <td>4500</td>
                <td><span class="symbol"></span>
                    <p>人族</p>
                </td>
                <td>开图</td>
            </tr>
            <tr>
                <td><img src="../assets/pics/profile-image.png" alt=""></td>
                <td>Amaris</td>
                <td>4500</td>
                <td><span class="symbol"></span>
                    <p>人族</p>
                </td>
                <td>开图</td>
            </tr>
            <tr>
                <td><img src="../assets/pics/profile-image.png" alt=""></td>
                <td>Amaris</td>
                <td>4500</td>
                <td><span class="symbol"></span>
                    <p>人族</p>
                </td>
                <td>开图</td>
            </tr>
            <tr>
                <td><img src="../assets/pics/profile-image.png" alt=""></td>
                <td>Amaris</td>
                <td>4500</td>
                <td><span class="symbol"></span>
                    <p>人族</p>
                </td>
                <td>开图</td>
            </tr>
        </table>
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
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.cheater-list-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

table {
    border-collapse: collapse;
    position: relative;
    width: 800px;
    height: 300px;
}

tr {
    position: relative;
}

tr th {
    background-color: var(--text-clr);
    height: 60px;
    color: var(--base-clr);
    font-size: 1.4em;
    font-weight: 400;
    text-transform: capitalize;
}

tr td {
    position: relative;
    height: 80px;
    padding-left: 1em;
}

tr td:nth-child(1) {
    padding: 0 2em;
}

tr td:nth-child(odd) {
    background-color: var(--hover-clr);
}

tr td:nth-child(even) {
    background-color: var(--line-clr);
}

tr td img {
    display: block;
    position: absolute;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid var(--text-clr);
}

tr td .symbol {
    background-color: transparent;
    display: inline-block;
    height: 8px;
    width: 8px;
    background-color: var(--text-clr);
    border-radius: 50%;
}

tr:nth-child(odd) td .symbol {
    background-color: #6dff18;
}

tr td p {
    display: inline;
    padding: 0 1em;
    color: var(--text-clr);
}

.cheater-list-title {
    font-size: 50px;
}
</style>