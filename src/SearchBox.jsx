import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateWeatherInfo }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "dc352675e41ff7d358cc56f54a937cd7"; //Please don't use this key you can also generate this key free!

    let weatherUpdate = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                temp: jsonResponse.main.temp,
                weather: jsonResponse.weather[0].description
            };
            // console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handelValue = (event) => {
        setCity(event.target.value);
    }

    let handelSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let newInfo = await weatherUpdate();
            updateWeatherInfo(newInfo);
        } catch(err) {
            setErr(true);
        }
    }

    return (
        <div>
            <form className='SearchBox' onSubmit={handelSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handelValue} required />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
            <p className='error'>{err && "This place is not in our data"}</p>
        </div>
    );
}
