import styles from "./infoSection.module.scss";
import photo from "../../images/photo/0.jpg";
import { MyInfo } from "./MyInfo";
import { Contacts } from "./Contacts";

export const InfoSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.photoWrapper}>
          <img src={photo} alt="photo" />
        </div>
        <MyInfo />
      </div>
    </section>
  );
};
