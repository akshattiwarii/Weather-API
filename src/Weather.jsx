import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 283.79,
        humidity: 93,
        pressure: 1017,
        temp: 284.2,
        weather: "mist"
    });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <SearchBox updateWeatherInfo={updateWeatherInfo}/>
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    );
}