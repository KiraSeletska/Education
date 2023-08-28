import { useSelector } from 'react-redux'
import styles from './MainTodoList.module.scss'
import { MainTodo } from '../MainTodo'

export const MainTodoList = () => {

    const data = useSelector(state => state.folders.folders)


    return(
        <div className={styles.wrapper}>
            {data.map(el => <MainTodo key={el.id} {...el}/>)}
        </div>
    )
}