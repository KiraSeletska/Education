import styles from './sliley.module.scss'

export const Smiley = () => {
    return (
        <div className={styles.smiley}>
          <div className={styles.eyes}>
            <div className={styles.eyeLeft}></div>
            <div className={styles.eyeRight}></div>
          </div>
          <div className={styles.mouth}></div>
        </div>
      );
    
}