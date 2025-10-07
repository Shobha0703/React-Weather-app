import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({ weatherData }) {
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1506126383447-1baf4fb3c267?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1575365872518-1f378590b6b7?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1664887981255-55ef7a62e19d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="info-box">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={
              weatherData.humidity > 80
                ? COLD_URL
                : weatherData.temp > 25
                ? RAINY_URL
                : HOT_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherData.city}  { 
              weatherData.humidity > 80
                ?  <SunnyIcon></SunnyIcon>
                : weatherData.temp > 25
                ?<ThunderstormIcon />
                : <AcUnitIcon></AcUnitIcon>
              }
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <div>
                <p>Temperature: {weatherData.temp} °C</p>
                <p>Humidity: {weatherData.humidity} %</p>
                <p>Min Temperature: {weatherData.tempMin} °C</p>
                <p>Max Temperature: {weatherData.tempMax} °C</p>
                <p>
                  {" "}
                  The weather can be described as <i>{weatherData.weather}</i>
                  and feels like {weatherData.feelsLike} °C
                </p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
