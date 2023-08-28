import { useSelector } from 'react-redux'
import styles from './TodoList.module.scss'
import { Todo } from '../Todo'

export const TodoList = () => {
const data = useSelector(state => state.todos.todos)

    return(
        <div className={styles.wrapper}>
            {data.map(el => <Todo key={el.id} {...el}/>)}
        
        </div>
    )
}