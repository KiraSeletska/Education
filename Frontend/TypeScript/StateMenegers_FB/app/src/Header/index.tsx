import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faBell, faHouse, faPlus, faStore, faTv, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import {User} from '../User'

export const Header = () => {


return (
    <div className={styles.headerWrapper}>
        <div className={styles.search}>
        <p><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></p>
            <input type="search" ></input>
        </div>
        <div className={styles.navigationMenu}>
            <p><a href="#"><FontAwesomeIcon icon={faHouse} /></a></p>
            <p><a href="#"><FontAwesomeIcon icon={faUserGroup} /></a></p>
            <p><a href="#"><FontAwesomeIcon icon={faTv} /></a></p>
            <p><a href="#"><FontAwesomeIcon icon={faStore} /></a></p>
        </div>
        <div className={styles.actionMenu}>
            <button><FontAwesomeIcon icon={faPlus} /></button>
            <button><FontAwesomeIcon icon={faFacebookMessenger} /></button>
            <button><FontAwesomeIcon icon={faBell} /></button>
<button><User/></button>
        </div>
    </div>
)
}