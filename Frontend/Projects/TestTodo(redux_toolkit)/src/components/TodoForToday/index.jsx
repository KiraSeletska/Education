import styles from './TodoForToday.module.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Todo } from '../Todo'
import { NavLink } from "react-router-dom";

export const TodoForToday = () => {

    const data = useSelector(state => state.todos.todos)

//let now = '14.08.2023'

const now = new Date()
const day = now.getDate()
const fixDay = day <=9 ? '0' + day : day

const month = now.getMonth() + 1
const fixMonth = month <= 9 ? '0' + month : month
const year = now.getFullYear()
const today = fixDay + '.' + fixMonth + '.' + year

    return(
        <div className={styles.wrapper}>
            <h2>Tasks for today</h2>
            <NavLink  to="/allTasks" ><button>All tasks</button> </NavLink>
{data.map((el) => el.deadLine === today &&  <Todo key={el.id} {...el}/>)}
        </div>
    )
}