import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from '../redux/actionCreators'
import './todoList.css'
export const TodoList = () => {
  /*
  const [todos, setTodos] = useState([
    { text: 'sdfsd', id: 1 },
    { text: 'sdfsd', id: 3 },
  ])*/

  const todos = useSelector((store)=>store.todos.todos)

  const [todoText, setTodoText] = useState('')

const dispatch = useDispatch()

  ///const sendTodosText = (e) => {}

  //const handleToggleTodo = () => {}

 // const handleRemoveTodo = (id) => {}

  return (
    <div className="container">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
      />
      <button onClick={()=>{dispatch(addTodo(todoText))}} className="add-button">
        Add Todo
      </button>
<button onClick={()=>{console.log(todos)}}>STATE</button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <button onClick={() => {dispatch(removeTodo(todo.id))}} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
