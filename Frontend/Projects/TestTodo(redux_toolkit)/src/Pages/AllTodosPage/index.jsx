import { useSelector } from 'react-redux'
import styles from './AllTodosPage.module.scss'
import { Todo } from '../../components/Todo'

export const AllTodosPage = () => {
const data = useSelector(state => state.todos.todos)
    return(
        <div className={styles.wrapper}> 
        HII! Im all tsask!
        <div className={styles.todosListWrapper}>
{data && data.map((el)=> <Todo key={el.id} {...el}/>)}
        </div>
        </div>

    )
}