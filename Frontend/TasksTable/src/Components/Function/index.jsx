import styles from "./styles.module.scss";
import { DataArr } from "../../Data";
import { useState } from "react";


export const Function = (el) => {
   
const [click, setClick] =useState(false)
console.log(click)
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

  const functionName = " unique ";
  const args = " (arr) ";
  const body1 = " newArr";
  const body2 = "arr.filter((el) ";
  const body3 = "newArr.includes(el)";
  const body4 = "newArr.push(el))";
  const result = "newArr";
  const functionCallArg = "([1, 1, 2, 2, 4, 2, 3, 7, 3])";
  const notes = "// => [1, 2, 4, 3, 7]";

  return (
    <div className={styles.wrapper}
    onClick={()=>setClick(!click)}
    >
      <div className={styles.mainContainer + ' ' + el.el.name }>
      <h2>{el.el.name}</h2>
      <div className={!click ? styles.container : styles.container + ' ' + styles.on} >
            <span className={styles.constText}>{constText}</span>
            <span className={styles.functionName}>{el.el.functionName}</span>
            <span className={styles.equals}>{equals}</span>
            {el.el.args}
            <span className={styles.equals}>{equals}</span>
            <span className={styles.more}>{more}</span>
            {el.el.braces && <span className={styles.obj}> {objOpen}</span>}
            <br />
            <p> {el.el.body1} </p>
            <p> {el.el.body2 && el.el.body2} </p>
            <p> {el.el.body3 && el.el.body3} </p>
            <p> {el.el.body4 && el.el.body4} </p>
            <p> {el.el.body5 && el.el.body5} </p>
            {el.el.body6 ? <p>{el.el.body6}</p> : ""}

        
            {el.el.return && <span className={styles.returnV}>{returnText}</span>}
            {el.el.returnValue && <span>{el.el.returnValue}</span>}    <br />
            {el.el.braces && <span className={styles.obj}> {objClose}</span>}  <br />
            <span className={styles.functionName}>{el.el.functionName}</span>
            {el.el.functionCallArg}
            {el.el.notes && <span className={styles.notes}>{el.el.notes}</span>}
            {el.el.exampleImag && <img src={el.el.exampleImag} alt="" />}
          
      </div>

      </div>

    </div>
  );
};
