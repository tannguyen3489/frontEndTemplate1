// ------------------------------------
// Constants
// ------------------------------------
import {doubleAsync, increment} from "../../Person/modules/person";

export const LOAD_DATA = 'LOAD_DATA';

// // ------------------------------------
// // Actions
// // ------------------------------------
// export function increment(value = 1) {
//     return {
//         type: COUNTER_INCREMENT,
//         payload: value
//     }
// }
//
// /*  This is a thunk, meaning it is a function that immediately
//     returns a function for lazy evaluation. It is incredibly useful for
//     creating async actions, especially when combined with redux-thunk! */
//
export const loadData = () => {
    return (dispatch, getState) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                console.log('parsed json', json)
                debugger;
                dispatch({
                    type: LOAD_DATA,
                    payload: json
                });

            })

            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
};

// export const doubleAsync = () => {
//     return (dispatch, getState) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 dispatch({
//                     type: COUNTER_DOUBLE_ASYNC,
//                     payload: getState().counter
//                 })
//                 resolve()
//             }, 200)
//         })
//     }
// }

export const actions = {
    loadData
};

// export const actions = {
//     increment,
//     doubleAsync
// }

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [LOAD_DATA]: (state, action) => {
        state = action.payload;
        return state;
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
];

export default function test1Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
