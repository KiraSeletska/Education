import styles from "./styles.module.scss";
export const UniqueValue = () => {
  const equals = "=";
  const more = ">";
  const arrOpen = "[";
  const arrClose = "]";
  const objOpen = " {";
  const objClose = "} ";
  const coma = ",";
  const semicolon = ";";
  const exclamationPoint = "!";
  const space = " ";
  const and = ' && '
  const or = ' || '
  const returnV = "return";
  const constText = "const";
  const letText = "let";
  const consoleLog = "console.log";

  const functionName = " unique ";
  const args = " (arr) ";
  const body1 = " newArr";
  const body2 = "arr.filter((el) ";
  const body3 = "newArr.includes(el)";
  const body4 = "newArr.push(el))";
  const result = "newArr";
  const functionCallArg =
    "([1, 1, 2, 2, 4, 2, 3, 7, 3])";
    const notes = '// => [1, 2, 4, 3, 7]'

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.constText}>{constText}</span>
        <span className={styles.functionName}>{functionName}</span>
        <span className={styles.equals}>{equals}</span>
        {args}
        <span className={styles.equals}>{equals}</span>
        <span className={styles.more}>{more}</span>
        <span className={styles.obj}> {objOpen}</span>
        <br />
        <span className={styles.letText}>{letText}</span>
        {body1}
        {space}
        <span className={styles.equals}>{equals}</span> {arrOpen} {arrClose}{" "}
        <br />
        {body2} <span className={styles.equals}>{equals}</span>
        <span className={styles.more}>{more}</span> <br />
        <span className={styles.exclamationPoint}>{exclamationPoint}</span>
        {body3} <span className={styles.operand}>{and}</span>{body4} <br />
        <span className={styles.returnV}>{returnV}</span> {result}
        <br />
        <span className={styles.obj}> {objClose} </span> <br />
        <span className={styles.functionName}>{functionName}</span>{functionCallArg}
        <span className={styles.notes}>{notes}</span>
      </div>
    </div>
  );
};
