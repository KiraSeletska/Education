import styles from './styles.module.scss'
import { DataArr } from "../../Data";
import { Function } from '../../Components/Function';

export const MainPage = () => {

    let keys = DataArr.reduce((acc, el)=> [...acc, ...Object.keys(el)], []);
//console.log(DataArr.map(el=>el.enique))
//console.log(DataArr[0].enique[0])
//console.log(DataArr)
    return (
        <div className={styles.wrapper}>
           {/*DataArr.map(el=><Function el={el.enique[0]}/> )*/} 
         {<Function el={DataArr[0].enique[0]}/>}
         {<Function el={DataArr[1].flat[0]}/>}
         {<Function el={DataArr[2].getTreeValues[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
         {<Function el={DataArr[3].test[0]}/>}
        </div>
    )
}