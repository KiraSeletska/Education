import { UserItem } from "../UserItem"
import styles from './styles.module.css'
import { context } from "../context"
import { useContext } from "react"

export const UserList = () => {

 const users = useContext(context)
    return(
        <div className={styles.userList}>
{users.map(el => 
    <UserItem key={el.id} {...el}/>
)}
        </div>
    )
}