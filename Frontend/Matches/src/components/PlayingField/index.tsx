import { MatchesField } from "../MatchesField";
import { Form } from "../Form";
import { useState } from "react";
import styles from './PlayingField.module.scss'
export const PlyingField = () => {

  const [inputValue, setInputValue] = useState(0)

  return (
    <div className={styles.wrapper}>
      <Form onChange={(value: any)=>setInputValue(value)}/>
      <MatchesField inputValue={inputValue} />
   
    </div>
  );
};
