import styles from './styles.module.scss'

export const FunctionSolution = (el) => {

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
    const and = " && ";
    const or = " || ";
    const returnText = "return ";
    const constText = "const";
    const letText = "let";
    const consoleLog = "console.log";
    
    return(
        <div className={styles.container} >
        <span className={styles.constText}>{constText}</span>
        <span className={styles.functionName}>{el.functionName}</span>
        <span className={styles.equals}>{equals}</span>
        {el.args}
        <span className={styles.equals}>{equals}</span>
        <span className={styles.more}>{more}</span>
        {el.braces && <span className={styles.obj}> {objOpen}</span>}
        <br />
        <p> {el.body1} </p>
        <p> {el.body2 && el.body2} </p>
        <p> {el.body3 && el.body3} </p>
        <p> {el.body4 && el.body4} </p>
        <p> {el.body5 && el.body5} </p>
        {el.body6 ? <p>{el.el.body6}</p> : ""}
        {el.return && <span className={styles.returnV}>{returnText}</span>}
        {el.returnValue && <span>{el.returnValue}</span>}    <br />
        {el.braces && <span className={styles.obj}> {objClose}</span>}  <br />
        <span className={styles.functionName}>{el.functionName}</span>
        {el.functionCallArg}
        {el.notes && <span className={styles.notes}>{el.notes}</span>}
       
  </div>
    )
}