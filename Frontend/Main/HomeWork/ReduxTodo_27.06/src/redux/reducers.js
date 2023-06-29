import { getRandomID } from "../App";

const initialCounterState = {
  counter: 0,
};

const initialTodoState = {
todos: [
    {
    id: getRandomID(),
    text: 'clean room',
    completed: false
}, 
    {
        id: getRandomID(),
        text: 'go to shop',
        completed: false
    }
    ]
}

export const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CHANGE":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
};


export const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case "ADDTODO":
         // console.log(state, action, action.payload)//показывает изминения состояния case
          const newTodo = {
            id: getRandomID(),
            text: action.payload,
            completed: false
          }
        console.log(newTodo)  
        return {
            ...state,
            todos: [...state.todos, newTodo]
          };
    
        case "TOGGLETODO":
      //  console.log(action) 
        return {...state,
            todos: state.todos.map(todo => 
            todo.id === action.idEl ? {...todo, completed: !todo.completed} : todo)}
            // совпадает id?   если да =>       поменять состояние   если нет=> оставляем, как есть
        case "REMOVETODO":
          return {...state, 
            todos: state.todos.filter(el => el.id !== action.idEl)}
    
        default:
          return state;
      }
}
