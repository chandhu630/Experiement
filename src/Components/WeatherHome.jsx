import { useEffect, useState } from 'react';
import './WeatherHome.css'
import axios from 'axios'

function WeatherHome()
{
    const [city,setCity] = useState(' ');
    const [weather,setWeather] = useState(null);
    useEffect(()=>
    {
        const apiKey = 'b1c3cc18614765933ac3f378e3a2f4a2';
        const fetchData = async () =>
        {
            try{
                const response =  await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city},India&appid=${apiKey}&units=metric`)
                const data = response.data;
                console.log('Weather Data:',data);
                setWeather(data);
            
                
                }catch(error)
                {
                    console.log("error",error.message);
                    setWeather(null)
                }
        }
        if(city.trim() !== '')
        {
            fetchData();
        }
    },[city])
    return(
        <div>
            
            <div className='display_picture'>
                <input className = "inputbar" type = "text" value={city}  placeholder = "search for your weather location ...🌧️ " onChange={(e) =>setCity (e.target.value)}/>
                {weather &&
            (
                <div>
                    <h2> Today's Report</h2>
                <div className='display-output'> ⛅️<b className='bold'> weather : </b><b className='pink'>{weather.name}, {weather.sys.country}</b> </div> 
                <p>  🌞<b className='bold'>Temperature : </b><b className='pink'>{weather.main.temp}°C</b></p>
                </div>
            )}
            </div>
            
        </div>
    )
}
export default WeatherHome;