import styles from "./WinnersMatch.module.scss";
export interface Props {
  props: number;
}

export const WinnersMatch = (props: Props) => {
  return (
    <div className={styles.match}>
      <div className={styles.fire}></div>
      <div className={styles.stick}>
        <p>{props.props}</p>
      </div>
    </div>
  );
};
