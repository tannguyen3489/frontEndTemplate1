<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-link to="/">Home</router-link>
        <!--<router-link to="/tan1">Tan1</router-link>-->
        <router-link to="/test1">Test1</router-link>
        <router-link to="/test2">Test2</router-link>

        <transition name="fade" mode="out-in">
            <!-- used with preserve component state or avoid re-rendering. -->
            <keep-alive include="test_1">
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
