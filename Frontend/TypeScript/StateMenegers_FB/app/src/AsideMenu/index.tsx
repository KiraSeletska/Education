import styles from './styles.module.scss'
import { User } from '../User'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faClockRotateLeft, faFileInvoice, faFlag, faNewspaper, faPeopleGroup, faStore, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons'


export const AsideMenu = () => {

    return (<div className={styles.asideWrapper}>
        <ul>
            <li><a href="3"><User/><span>User Name</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faUserGroup}/></p><span>Друзья</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faFileInvoice} /></p><span>Ленты</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faPeopleGroup} /></p><span>Группы</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faStore} /></p><span>MarketPlace</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faVideo} /></p><span>Watch</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faClockRotateLeft} /></p><span>Воспоминания</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faBookmark} /></p><span>Сохраненные</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faFlag} /></p><span>Страницы</span></a></li>
            <li><a href="3"><p><FontAwesomeIcon icon={faNewspaper} /></p><span>Новости</span></a></li>
        </ul>

    </div>)
}