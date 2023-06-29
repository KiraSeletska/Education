import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addTodo, toggleTodo, deletTodo } from '../redux/todoSlice'
import './todoList.css'

export const TodoList = () => {

  const todos = useSelector((store)=>store.todos.todos)

  const [todoText, setTodoText] = useState('')

const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(addTodo(todoText))
    setTodoText('')
  }

  
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
  }

 const handleRemoveTodo = (id) => {
  dispatch(deletTodo(id))
 }

  return (
    <div className="container">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="todo-input"
      />
      <button onClick={()=>handleAddTodo()} className="add-button">
        Add Todo
      </button>
<button onClick={()=>console.log(todos)}>STATE</button>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>handleToggleTodo(todo.id)}
            />
            <button onClick={() =>handleRemoveTodo(todo.id)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
