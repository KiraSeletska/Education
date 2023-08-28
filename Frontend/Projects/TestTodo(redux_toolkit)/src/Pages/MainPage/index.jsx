import { TodoList } from "../../components/TodoList";
import { MainTodoList } from "../../components/MainTodoList";
import { AddTodoForm } from "../../components/AddTodoForm";
import styles from "./MainPage.module.scss";
import { WeatherList } from "../../components/Weather/WeatherList";
import { TodoForToday } from "../../components/TodoForToday";
import { Calendar } from "../../components/Calendar";
import { Time } from "../../components/Time";
import { Weather } from "../../components/Weather";
import { useState } from "react";
import { ShoeState } from "../../components/ShoeState";
export const MainPage = () => {

  const [weatherBar, setWeatherBar] = useState(false)

  const showWeatherBar = () => {
setWeatherBar(!weatherBar)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.addTodoFormContainer}>
        <AddTodoForm />{" "}
      </div>

    <div className={styles.smallWeatherContainer}>
        <Weather showWeatherBar={showWeatherBar} />
  </div>
 <div className={styles.state}> <ShoeState /></div>
      <div className={styles.mainTodoListContainer}>
        {" "}
        <MainTodoList />{" "}
      </div>
      <div className={styles.weatherContainer}>
        <WeatherList weatherBar={weatherBar}/>
  </div>
      <div className={styles.todoForTodayContainer}>
        {" "}
        <TodoForToday />

      </div>
      <div className={styles.calendarWrapper}>
        <Calendar/>
      </div>
      <div className={styles.timeWrapper}>
        <Time/>
      </div>
    </div>
  );
};
