import { FormEvent, SetStateAction, useState } from "react";
import styles from "./Form.module.scss";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Form = (props: { onChange: (arg0: string) => void }) => {
  const [test, setTest] = useState("");
  const [error, setError] = useState(false);

  const saveValue = (e: SetStateAction<any>) => {
    const trueValue = /^(2|[2-9][2-9]*)$/g;
    if (!trueValue.test(e)) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } else {
      setTest(e);
    }
  };

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onChange(test);
    setTest("");
  };

  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={(event) => handleChange(event)}>
        <input
          type="text"
          placeholder="How meny plauers?"
          value={test}
          onChange={(e) => saveValue(e.target.value)}
        />
        <button className={styles.btn + " " + styles.btnActive} type="submit">
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </form>
      <p className={styles.errorMessage}>
        {error && 'Please, nter a number from "2" '}
      </p>
    </div>
  );
};
