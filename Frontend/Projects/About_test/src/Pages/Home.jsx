
import { HelloSection } from '../components/HelloSection'
import { InfoSection } from '../components/InfoSection'
import { Header } from '../components/Header'
import styles from './home.module.scss'

export const Home = () => {


    return(
        <div className={styles.wrapper}>
 
        <InfoSection/>
        <HelloSection/>
 
        </div>
    )
}