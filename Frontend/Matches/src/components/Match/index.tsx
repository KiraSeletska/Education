
import styles from './Match.module.scss'
import { Props } from '../WinnersMatch'

export const Match = (props: Props) => {
    return(
      
    <div className={styles.match}>
    <div className={styles.fire}></div>
    <div className={styles.stick}><p>{props.props}</p></div>
  </div>
  )
}