import { FC } from "react";
import styles from "./styles.module.scss";

interface AdProps {
  img: string;
  title: string;
  website: string;
}

export const Ad: FC<AdProps> = ({ img, title, website }) => {
  return (
    <div className={styles.adContainer}>
      <a href="#">
        <div>
          <img src={img} alt="" />
          <div>
            <p>{title}</p>
            <span>{website}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
