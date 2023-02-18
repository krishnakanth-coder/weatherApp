import React, { useState, useEffect } from "react";

const CurrentLocation = ()=>{
    const [current,setCurrent] = useState({})
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
    
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d885aa1d783fd13a55050afeef620fcb&units=metric`
          )
            .then((res) => res.json())
            .then((data) => setCurrent(data))
      
        });
      }, []);
    return(
        <div className="current-location container">
        {current.main &&(
          <div>
          <h1>{`Hi ! You in ${current.name}`}</h1>
          <h1>{`Tem: ${Math.round(current.main.temp)}°C`}</h1>
          </div>
        )}
        {current.main === undefined &&(
          <h1>Your location temperature is loading....</h1>
        )}
        <br/>
      </div>
      
    )
}

export default CurrentLocation;