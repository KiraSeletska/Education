import { useEffect, useState } from "react";
import styles from "./Time.module.scss";

export const Time = () => {
  const [date, setDate] = useState(new Date());
const [day, setDay] = useState()
  const formatDate = () => {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = "0" + yy;

    return dd + "." + mm + "." + yy;
  };

  const formatTime = () => {
    let hh = date.getHours();
    if (hh < 10) hh = "0" + hh;

    let mm = date.getMinutes();
    if (mm < 10) mm = "0" + mm;

    let ss = date.getSeconds();
    if (ss < 10) ss = "0" + ss;

    return hh + "." + mm + "." + ss;
  };

  useEffect(() => {
    let dayWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday ",
      "Saturday",
    ][date.getDay()];
    setDay(dayWeek);
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);





  return (
    <section className={styles.wrapper}>
      <p className={styles.time}> {formatTime()}</p>
      <p className={styles.day}>{day}</p>
      <p className={styles.date}>{formatDate()}</p>
    </section>
  );
};
