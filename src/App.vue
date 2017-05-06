<template>
    <div id='app-container'>
        <div id='app-nav'>
            <router-link to="/">Home</router-link>
            <router-link to="/news">News</router-link>
            <router-link to="/bio">Bio</router-link>
        </div>
        <div id='app-content'>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style>
    body, #app-container {
        padding: 0;
        margin: 0;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }
    #app-nav {
        text-align: center;
        margin: 0.5em;
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
