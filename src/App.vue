<template>
    <div id='app-container'>
        <div id='app-nav'>
            <router-link to="/">Home</router-link>
            <router-link to="/goodbye">Goodbye</router-link>
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
    #app-content {
        /* We center all page content here */
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
