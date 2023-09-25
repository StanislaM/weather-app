import { IWeatherData } from '../shared/types';

interface IAddWetherData {
    wind: number;
    feelsLike: number;
    pressure: number;
    chanceOfRain: number;
}

const addWeatherInfoParser = (weather: IWeatherData): IAddWetherData => {
    return {
        wind: weather.current.wind_kph,
        feelsLike: weather.current.feelslike_c,
        pressure: weather.current.pressure_mb,
        chanceOfRain:
            weather.forecast.forecastday[0].hour[
                new Date(weather.location.localtime).getHours()
            ].chance_of_rain,
    };
};

export default addWeatherInfoParser;
