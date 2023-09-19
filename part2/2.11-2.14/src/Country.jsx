import { useState,useEffect } from "react"
import axios from "axios"

function Country({name,population,languages,flag,len,capital}) {
  
  const [showInfo,setShowInfo] = useState(false)
   const [temperature,setTemperature] = useState()
   const [wind,setWind] = useState()
   const [climImage, setClimImage] = useState()

   useEffect(()=>{
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${import.meta.env.VITE_COUNTRY_KEY}`)
                          .then(weather => {
                            setTemperature(weather.data.main.temp)
                            setWind(weather.data.wind.speed)
                            setClimImage(weather.data.weather[0].icon)
                          })         
   },[])

    const temperatureKevintoCelcius = Math.floor(temperature-273.15)
    
    const randomClim = Math.floor(Math.random() * 30)

    let noIconCountry = climImage || "02d"
  return (
    <div key={name} >
               <h2>{name} {len !== 1 && <button onClick={() => setShowInfo(!showInfo)} >Show</button> } </h2>
        {showInfo || len === 1 ? <div>
            <p>Population: {population}</p>
               <ul>
                    <h3>Languages:</h3>
                    {languages.map((lang) => <li key={lang} >{lang}</li> )}
               </ul>
               <img src={flag} alt="Country flag"  />
               <section>
                  <h3>Weather in {capital}</h3>
                  <div>
                  <b>temperature:</b> <span>{temperature ? temperatureKevintoCelcius : randomClim * 1.5} Celcius </span>
                  </div>
                  <img src={`https://openweathermap.org/img/wn/${noIconCountry}@2x.png`} alt="iconWeather" />
                  <div>
                  <b>wind</b> <span>{wind || randomClim} m/s</span>
                  </div>
               </section>
             </div> : null
          }
               
          </div>  
  )
}
export default Country