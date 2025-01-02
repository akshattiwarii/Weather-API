import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({weatherInfo}) {
    let HOT_URL = "https://images.unsplash.com/photo-1674388357673-5f9cc7c59324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwcGxhY2V8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1661753847775-0125e0991881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHBsYWNlfGVufDB8fDB8fHww";
    let RAIN_URL = "https://images.unsplash.com/photo-1723226766511-b81dc514548e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGltYWdlfGVufDB8fDB8fHww";
    return (
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {weatherInfo.humidity > 80 ? RAIN_URL : (weatherInfo.temp <= 280 ? COLD_URL : HOT_URL)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherInfo.city} {weatherInfo.humidity >80 ? <ThunderstormIcon/> : (weatherInfo.temp <=280 ? <AcUnitIcon/> : <WbSunnyIcon/>)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Humidity: {weatherInfo.humidity}</p>
                        <p>Pressure: {weatherInfo.pressure}Pa</p>
                        <p>Tempreature: {weatherInfo.temp}&deg;F</p>
                        <p>`The weather feelslike <i>{weatherInfo.feelsLike}&deg;F</i> with <b>{weatherInfo.weather}</b>`</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}