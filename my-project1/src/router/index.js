import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tan1 from '@/components/TanComponent/Tan1'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: HelloWorld
        },
        {
            path: '/test1',
            name: 'test1',
            component: Test1
        },
        {
            path: '/test2',
            name: 'test2',
            component: Test2
        },
        {
            path: '/tan1',
            name: 'tan1',
            component: Tan1
        }
    ]
})
