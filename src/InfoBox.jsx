import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';





export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1542176178-76c03e65d40d?q=80&w=2516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



    return(
        <div className="InfoBox">
        <div className="cardContainer">
             <Card className="weather-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography className='weather-city' gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80 
            ? <ThunderstormIcon/>
            : info.temp>15 
            ? <SunnyIcon/>
            : <AcUnitIcon/>
          }
        </Typography>
        <Typography className='weather-details' variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Temperature min={info.tempMin}</p>
            <p>Temperature max={info.tempMax}</p>
            <p>the weather is {info.weather} and feels like {info.feelslike}</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}