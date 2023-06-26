import styles from "./styles.module.css";

export const PropductItem = ({ id, thumbnail, title, deletProduct }) => {
  console.log("****");
  return (
    <div className={styles.item}>
      <button onClick={() => deletProduct(id)}>Delet</button>
      <img src={thumbnail} />
      <p>{title}</p>
    </div>
  );
};
