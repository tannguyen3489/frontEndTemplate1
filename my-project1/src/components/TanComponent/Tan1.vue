<template>
    <div ref="tan1Component" class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links tan</h2>
        <button v-on:click="reverseMessage1">Reverse Message</button>


        <router-link to="/">Home</router-link>
        <router-link to="/tan1">Tan1</router-link>
    </div>
</template>

<script>

    import Vue from 'vue';
    import Tan1 from './TanComponent';


    let tan1 = new Tan1(this);

    // export default tanComponent;

    export default tan1.getVueComponent()

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "tan.scss";


</style>
