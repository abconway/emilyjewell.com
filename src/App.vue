<template>
    <div id='app-container'>
        <div id='app-header'>
            Emily Jewell
        </div>
        <div id='app-nav'>
            <router-link to="/">Home</router-link>
            <router-link to="/news">News</router-link>
            <router-link to="/bio">Bio</router-link>
            <router-link to="/resume">R&eacute;sum&eacute;</router-link>
            <router-link to="/press">Press</router-link>
            <router-link to="/media">Media</router-link>
        </div>
        <div id='app-content'>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style>
    @font-face {
        font-family: 'halo';
        src: url('__STATIC__/fonts/HaloHandletter.eot?') format('eot'),
             url('__STATIC__/fonts/HaloHandletter.woff') format('woff'),
             url('__STATIC__/fonts/HaloHandletter.ttf') format('truetype');
    }
    body {
        margin: 0;
        padding: 0;
    }
    #app-container {
        background-image: url('__STATIC__/images/EmilyJewellHeadshot.jpg');
        background-repeat: no-repeat;
        height: 1500px;
        width: 1000px;
        margin: 0 auto;
        padding: 0;
        top: 0;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }
    #app-header {
        text-align: center;
        width: 80%;
        margin: auto;
        font-family: halo;
        font-size: 10em;
        top: 0;
    }
    #app-nav {
        text-align: center;
        width: 80%;
        margin: auto;
        padding: 0.5em;
    }
    #app-nav a {
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        color: black;
        font-family: halo;
        font-size: 3em;
        margin: auto 0.5em;
    }
    #app-content {
        display: flex;
        justify-content: center;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .2s ease
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>
