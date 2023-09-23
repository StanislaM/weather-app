import { useSelector } from 'react-redux';
import CurrentWeather from './CurrentWeather';

import { RootState } from '../../store';
import { IWeatherData } from '../../shared/types';
import { useWeatherIcon } from '../../hooks/useWeatherIcon';
import './DisplayCurrentWeather.scss';
import AdditionalInfo from './AdditionalInfo';

const DisplayCurrentWeather = () => {
    const weather: IWeatherData = useSelector(
        (state: RootState) => state.weather.weather
    ) as IWeatherData;
    const icon = useWeatherIcon(
        weather.current.condition.code,
        weather.current.condition.icon
    );

    return (
        <div className="display-current-weather">
            <AdditionalInfo
                wind={weather.current.wind_kph}
                feelsLike={weather.current.feelslike_c}
                pressure={weather.current.pressure_mb}
                chanceOfRain={
                    weather.forecast.forecastday[0].hour[
                        new Date(weather.location.localtime).getHours()
                    ].chance_of_rain
                }
            />

            <CurrentWeather
                temperature={weather.current.temp_c}
                maxTemp={weather.forecast.forecastday[0].day.maxtemp_c}
                minTemp={weather.forecast.forecastday[0].day.mintemp_c}
                conditions={weather.current.condition.text}
                icon={icon}
            />
        </div>
    );
};

export default DisplayCurrentWeather;
