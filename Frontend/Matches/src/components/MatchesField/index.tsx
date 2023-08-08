import { WinnersMatch } from "../WinnersMatch";
import { Match } from "../Match";
import styles from "./MatchesField.module.scss";
import { useEffect, useState } from "react";

export const MatchesField = (props: { inputValue: number; }) => {
  const test: number = props.inputValue;

  const [play, setPlay] = useState<boolean>(false);
  const [win, setWin] = useState<number>();

  useEffect(() => {
    setWin(Math.floor(Math.random() * test + 1));
  }, [play]);

  const players = () => {
    let content: any = [];

    for (let i = 1; i <= test; i++) {
      if (play && i === win) {
        content.push(<WinnersMatch key={i} props={i} />);
      } else {
        content.push(<Match props={i} key={i} />);
      }
    }
    return content;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.matchesContainer}>{players()}</div>
      <div className={styles.buttonContainer}>
        {test !== 0 && (
          <button
            className={styles.btn + " " + styles.btnActive}
            onClick={() => setPlay(!play)}
          >
            {play ? "Restart" : "Play"}
          </button>
        )}
      </div>
    </div>
  );
};
