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

const shangeCompleted = (idEl, arr) => {
    const changeTodo = arr.find((el) => el.id === idEl);
    changeTodo && (changeTodo.completed = !changeTodo.completed);
    return arr
}

const deletTodo = (idEl, arr) => {
    const newArr = arr.filter((el) => el.id !== idEl);
 return newArr
  };

export const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case "ADDTODO":
          return {
            ...state,
            todos: state.todos.concat([{
        id: getRandomID(),
        text: action.payload,
        completed: false
            }]),
          };
    
        case "TOGGLETODO":
          return {...state,
            todos: state.todos.map(todo => {
            if (todo.id === action.idEl) {
              todo.completed = !todo.completed
              return todo
            }
            return todo
          })}
  
        case "REMOVETODO":
          return {...state, 
            todos: [...state.todos.filter(el => el.id !== action.idEl)]}
    
        default:
          return state;
      }
}
