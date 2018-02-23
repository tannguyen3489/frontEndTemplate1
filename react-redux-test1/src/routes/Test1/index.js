import {injectReducer} from '../../store/reducers'
import {About, Home, Topics, Topic} from "./components/Test1";

export default (store) => ({
    path: 'test1',
    childRoutes: [
        {
            path: '/test1/index',
            component: Home
        },
        {
            path: '/test1/about',
            component: About
        },
        {
            path: '/test1/topics',
            component: Topics,
            childRoutes: [
                {
                    path: '/test1/topics/:topicId',
                    component: Topic
                },
            ]
        }
    ],
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const Counter = require('./containers/Test1Container').default
            const reducer = require('./modules/test1').default

            /*  Add the reducer to the store on key 'test1'  */
            injectReducer(store, {key: 'test1', reducer})

            /*  Return getComponent   */
            cb(null, Counter)

            /* Webpack named bundle   */
        }, 'test1')
    }
})
