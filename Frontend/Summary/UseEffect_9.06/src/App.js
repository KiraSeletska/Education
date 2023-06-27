
import { useEffect, useState } from "react";
import "./App.css";
/*import { Greeting } from "./Greeting";
import { UserNameInput } from "./UserNameInput";
import { Days } from "./Days/index";
import { LoginForm } from "./LoginForm";
import { Weather } from "./Weather";*/
function App() {

  /*
  const [userName, setUserNAme] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

const canBahnut = 
  selectedDay === "ПТ" || 
  selectedDay ===  "СБ" || 
  selectedDay === "ВС";
*/

//const url = 'http://google-translate1.p.repidapi.com/language/translate/v2/detect'

useEffect(async () => {
  const url = 'http://google-translate1.p.repidapi.com/language/translate/v2/detect'

  const option = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      //'X-RapidAPI-Key': 'e4c678b476msh7922ce2d3618385ple61d2jsn8213c88d19d5',
      'X-RapidAPI-Host' : 'google-translate1.p.rapidapi.com',
    }, 
    body: new URLSearchParams({
      q: 'English is hard, but detectably so'
    })
  };
  const res = await fetch(url, option);
  const json = await res.json();
  console.log(json)
}, [])

  return (
    <div className="App">
      {/*
     <UserNameInput />
      <Greeting />
     */}
    {/*  А не бахнуть ли нам сегодня? <br />
      Выберите день недели
      <Days onDaySelected={setSelectedDay} />
      Выбранный день недели {selectedDay}. <br />
      {canBahnut ? "Конечно ДА!"
    : "Нельзя, завтра на работу"}*/}
   {/* <LoginForm/>*/}
   {/*<Weather/>*/}
    </div>
  );
}

export default App;
