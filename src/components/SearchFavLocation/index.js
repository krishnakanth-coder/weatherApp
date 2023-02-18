import React, { useState} from "react";
import './index.css'
const SearchFavLocation = ()=>{
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState({});
    const [favLocation,setFavLocation] = useState([])
    const [error,setError] = useState()
    const onSearchInput = async () => {
        
          const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d885aa1d783fd13a55050afeef620fcb&units=metric`
          ).then((res) => res.json());
          if(data.cod === 200){
            setWeather(data);
            setLocation("");
            setError()
          }else{
            setError(data.message)
          }
        
      };
    const onSaveButton = ()=>{
        if(!favLocation.includes(weather)){
            setFavLocation((prev)=>([...prev,weather]))
        }
    }

    const renderSaveLocations = () =>{
            return(
                <table>
                    <tr>
                    <th>Location Name</th>
                    <th>temperatur</th>
                    </tr>
                    
                        {favLocation.map(each =>{
                            return (
                                <tr key={each.name}>
                                <td>
                            {each.name}
                        </td>
                        <td>
                        {Math.round(each.main.temp)}°C
                        </td>
                        </tr>
                            )
                        })}
                </table>
                
            )  
    }
    return(
        <>
        <input
        type="text"
        placeholder="Search location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="search-item search-input"
      />
      <button className="search-item search-button" onClick={onSearchInput}>Search</button>
      {(weather.main && error === undefined) && (
        <div>
          <div>{weather.name}</div>
          <div>{Math.round(weather.main.temp)}°C</div>
          <button onClick={onSaveButton}> Save location</button>
        </div>
      )}
      {
        error !== undefined &&
        <div>
            <p>{error}</p>
        </div>
      }
      <div> 
        {favLocation.length >0 &&
        <div>
            <h3> Save locations List</h3>
           {renderSaveLocations()}
        </div>
        }
      </div>
      </>

    )
}

export default SearchFavLocation;