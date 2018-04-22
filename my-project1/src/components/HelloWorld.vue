<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links HOme 1</h2>

        <div>
            tan
            <input class="tan" v-model="testData1" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello123',
        data() {
            return {
                testData1: 'tan1',
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
