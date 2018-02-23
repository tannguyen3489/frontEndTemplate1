<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links HOme 1</h2>
        <router-link to="/">Home</router-link>
        <router-link to="/tan1">Tan1</router-link>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App 111 asfasdfasd asdfasdfasdf'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hello {
        background: red !important;

        a {
            color: green;
        }
    }
</style>
