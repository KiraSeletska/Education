import { NavLink } from "react-router-dom";
import styles from './Header.module.scss'
import { useState } from "react";
export const Header = () => {

    const [headerState, setHeaderState] = useState(false)
    return(
        <header className={!headerState ? styles.header : styles.header + ' ' + styles.on}>
            <div className={styles.linksContainer}>
            <NavLink  to="/MainPage" ><button>Main Page</button> </NavLink>
            <NavLink  to="/allTasks" ><button>Main Page</button> </NavLink>
            </div>
       <div className={styles.handle} onClick={()=>setHeaderState(!headerState)}>Links</div>
        </header>
    )
}