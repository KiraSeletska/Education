import styles from "./myInfo.module.scss";

export const MyInfo = () => {

  return (
    <div className={styles.infoWrapper}>
      <h2>FRONTEND DEVELOPER</h2>
      <div className={styles.basicInfoWrapper}>
      <p className={styles.typeInfo}>Age:</p>  <p>34 years old</p>
          <p className={styles.typeInfo}> Residence:</p> <p>Germany, Traunstein (Bayern)</p>
          <p className={styles.typeInfo}>Citizenship:</p>   <p>Ukrainian</p>
      </div>

    </div>
  );
};
