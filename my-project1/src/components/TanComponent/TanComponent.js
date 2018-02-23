import Vue from 'vue'

class Tan1 {

    constructor(vm) {
        let me = this;
        me.context = vm;

        me.orginData = {
            firstName: 'Walter',
            lastName: 'White',
            alias: 'Heisenberg',
            msg: 'Hello world! 111'
        };

        this.vueComponent = Vue.extend({
            data(){
                return me.orginData;
            },
            methods: {
                reverseMessage: function () {
                    this.msg = this.msg.split('').reverse().join('')
                },
                reverseMessage1: function () {
                    debugger;
                    me.setNewDataMsg();
                }
            }
        })
    }

    setNewDataMsg() {
        this.orginData.msg = "fasdfasdfasdf";
    }


    loadData() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => console.log(json))

    }

    getVueComponent() {
        return this.vueComponent;
    }
}

export default Tan1
