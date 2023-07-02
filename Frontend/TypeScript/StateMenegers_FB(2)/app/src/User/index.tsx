import user from '../images/cat.svg'
import styles from './styles.module.scss'

export const User = () => {

    return(
        <div className={styles.user}>
            <img src={user} alt="user" />
        </div>
    )
} 