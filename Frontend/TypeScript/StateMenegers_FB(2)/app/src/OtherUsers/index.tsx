import otherUser from '../images/OtherUser.svg'
import styles from './styles.module.scss'

export const OtherUser = () => {

    return(
        <div className={styles.user}>
            <img src={otherUser} alt="user" />
        </div>
    )
} 