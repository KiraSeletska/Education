import styles from './styles.module.scss'
import { DataArr } from "../../Data";
import { MainFunction } from '../../Components/MainFunction';

export const MainPage = () => {

    //let keys = DataArr.reduce((acc, el)=> [...acc, ...Object.keys(el)], []);

    return (
        <div className={styles.wrapper}>
 {DataArr.map(el => <MainFunction {...el} key={el.id}/>)}
     
        </div>
    )
}