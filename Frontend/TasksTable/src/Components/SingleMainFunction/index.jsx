import styles from "./styles.module.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getRandomID } from "../../Data";

export const SingleMainFormula = (el) => {
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
  const functionText = 'function'
  const letText = "let";
  const consoleLog = "console.log";

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{el.name}</h2>
      <h3 className={styles.clue}>{el.description}</h3>
      <p className={styles.keyWords}>
        {" "}
        Key words:{" "}
        {el.keyWords.map((el) => (
          <span key={getRandomID()}>{el}</span>
        ))}{" "}
      </p>

      <div className={styles.container}>
        <span className={styles.constText}>{el.constText ? constText : functionText}</span>
        <span className={styles.functionName}>{el.functionName}</span>
        <span className={styles.equals}>{el.constText && equals}</span>
        {el.args}
        <span className={styles.equals}>{el.constText && equals}</span>
        <span className={styles.more}>{el.constText && more}</span>
        {el.braces && <span className={styles.obj}> {objOpen}</span>}
        <br />
        <p> {el.body1} </p>
        <p> {el.body2 && el.body2} </p>
        <p> {el.body3 && el.body3} </p>
        <p> {el.body4 && el.body4} </p>
        <p> {el.body5 && el.body5} </p>
        <p> {el.body6 && el.body6} </p>
        <p> {el.body7 && el.body7} </p>
        <p> {el.body8 && el.body8} </p>
        <p> {el.body9 && el.body9} </p>
        <p> {el.body10 && el.body10} </p>
        <p> {el.body11 && el.body11} </p>
        <p> {el.body12 && el.body12} </p>
        <p> {el.body13 && el.body13} </p>
        <p> {el.body14 && el.body14} </p>
        <p> {el.body15 && el.body15} </p>
        {el.return && <span className={styles.returnV}>{returnText}</span>}
        {el.returnValue && <span>{el.returnValue}</span>} <br />
        {el.braces && <span className={styles.obj}> {objClose}</span>} <br />
        <span className={styles.functionName}>{el.functionName}</span>
        {el.functionCallArg}
        {el.notes && <span className={styles.notes}>{el.notes}</span>}
      </div>
    </div>
  );
};
