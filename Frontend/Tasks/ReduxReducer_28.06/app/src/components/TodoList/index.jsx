import { useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem';
export const TodoList = () => {
const todo = useSelector(state=>state.todo)
console.log(todo)

return(
    <div>
        {todo.map((el)=>
        <TodoItem key={el.id} {...el}/>)}
    </div>
)
}