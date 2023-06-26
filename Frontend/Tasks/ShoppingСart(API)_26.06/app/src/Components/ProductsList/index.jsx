import { PropductItem } from "../PropductItem"
import styles from './styles.module.css'

export const ProductsList = ({state, deletProduct}) => {

    console.log(state)
    return (
        <div className={styles.container}>
            {
            state.map((el)=><PropductItem key={el.id} {...el} deletProduct={deletProduct}/>)
            }
        </div>
    )
}