import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  weatherForm:FormGroup;
  weatherData:any=null;
  temperatureEmoji:string|null=null;
  humidityEmoji:string|null=null;
  descriptionEmoji:string|null=null;
  isLoading:boolean=false;
  errorMessage:string|null=null;

  constructor(private fb:FormBuilder,private weatherService:WeatherServiceService){
    this.weatherForm=this.fb.group({
      city:['']
    });
  }

    getTemperatureEmoji(temp: number): string {

    if (temp <= 0) return '❄️';

    if (temp > 0 && temp <= 10) return '🌬️';

    if (temp > 10 && temp <= 20) return '🌤️';

    if (temp > 20 && temp <= 30) return '☀️';

    return '🔥';

  }



  getHumidityEmoji(humidity: number): string {

    if (humidity < 30) return '🌵';

    if (humidity >= 30 && humidity <= 60) return '☁️';

    return '💧';

  }



  getDescriptionEmoji(description: string): string {

    const emojiMap: { [key: string]: string } = {

      'clear sky': '☀️',

      'few clouds': '🌤️',

      'scattered clouds': '⛅',

      'broken clouds': '🌥️',

      'overcast clouds': '☁️',

      'light rain': '🌦️',

      'moderate rain': '🌧️',

      'heavy intensity rain': '🌧️💦',

      thunderstorm: '⛈️',

      snow: '❄️',

      mist: '🌫️',

    };



    return emojiMap[description] || '❓';

  }

  fetchWeather(){
    this.isLoading=true;
    this.errorMessage=null;
    const city=this.weatherForm.get('city')?.value;

    if(!city){
      this.errorMessage="Please enter a city name or try again.";
      this.isLoading=false;
      return;
    }
    this.weatherService.getWeatherByCity(city).subscribe({
      next:(data)=>{
        this.weatherData=data;
        this.temperatureEmoji=this.getTemperatureEmoji(this.weatherData.main.temp);
        this.humidityEmoji=this.getHumidityEmoji(this.weatherData.main.humidity);
        this.descriptionEmoji=this.getDescriptionEmoji(this.weatherData.weather[0].description);
      },
      error:(error)=>{
        this.errorMessage="Could not fetch weather data. Please check the city name and try again.";
      },
      complete:()=>{
        this.isLoading=false;
      }
    });
  }
}
