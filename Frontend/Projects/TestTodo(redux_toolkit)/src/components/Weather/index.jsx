import styles from './Weather.module.scss'
import { useEffect, useState } from 'react'
import { WeatherCard } from './WeatherCard.jsx'

export const Weather = ({showWeatherBar} ) => {

    const [data, setData] = useState()
let city = 'Kyiv'

    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=eng&units=metric&APPID=ba23aa42ff61ed334a3351d5244128b3`
  
    useEffect(()=> {
        fetch(weatherURL)
        .then(res => res.json())
        .then(data =>{
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("15:00:00"))
       
            setData(dailyData)
          })
    }, [])
 
    return(
        <div className={styles.wrapper} onClick={()=> showWeatherBar()}>
         {data && data.map((el, ind)=> ind === 0 && < WeatherCard key={el.dt} 
         date='Today'
         //description={el.weather[0].description} 
         temp={el.main.temp}
         main={el.weather[0].main}
        // icon={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
        />)}  
        </div>
    )
}