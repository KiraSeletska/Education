import {combineReducers, createStore} from 'redux'
import { todoReducer } from './reducer/todoReducer'

const rootReducer = combineReducers({
todo: todoReducer
})
/*
export function action(state, action) {
    switch(action, type){
       case 'DELET': { 
      
            ind: value
        };
    }

}*/

//export default state;

export const store = createStore(rootReducer)