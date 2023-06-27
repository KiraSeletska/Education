import { useEffect, useState } from "react"

export const Weather = () => {
    const [latitude, setLatitude] = useState('52.52')
const [longitude, setLongitude] = useState('13.41')
const [temperature, setTemperature] = useState('')


const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(json => {
        console.log(json);
    setTemperature(json.hourly.temperature_2m[0])})
    
   }, [latitude, longitude])


return(
       <>
       <input placeholder="Latitude"
       value={latitude}
       onChange={(e)=>setLatitude(e.target.value)}
       ></input>

       <input placeholder="longitude"
       value={longitude}
       onChange={(e)=>setLongitude(e.target.value)}
       >
       </input> <br />

       Latitude:&nbsp;{latitude}. <br />
       longitude:&nbsp;{longitude}. <br />
       temperature:&nbsp;{temperature}. <br />

       <button onClick={()=> window.location.reload}>Refresh</button>
       </>
    )
}