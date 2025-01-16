<template>
    <div class="navbar">
        <div class="logo">Vue.js router labs</div>
        <div class="nav">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<style scoped>
    .navbar {
        background-color: #333;
        color: white;
        padding: 35px;
    }
    .navbar a {
        color: white;
        text-decoration: none;
    }
    .navbar a:hover {
        color: yellow;
    }

    .navbar .logo {
        font-size: 1.5em;
        font-weight: bold;
        float: left;
    }

    .navbar .nav {
        float: right;
    }

    .navbar .nav a {
        margin-left: 10px;
    }

    .navbar .nav a:first-child {
        margin-left: 0;
    }

    .navbar .nav a.active {
        color: yellow;
    }

    .navbar .nav a.active:hover {
        color: white;
    }

    .navbar .nav a:hover {
        color: yellow;
    }

    .navbar .nav a:last-child {
        margin-right: 0;
    }

    a.router-link-exact-active {
        color: red;
    }
</style>