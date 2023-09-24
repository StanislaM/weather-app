import { useSelector } from 'react-redux';
import CurrentWeather from './CurrentWeather';

import { RootState } from '../../store';
import { IWeatherData } from '../../shared/types';
import { useWeatherIcon } from '../../hooks/useWeatherIcon';
import './DisplayCurrentWeather.scss';
import AdditionalInfo from './AdditionalInfo';
import NextWeather from './NextWeather';

const DisplayCurrentWeather = () => {
    const weather: IWeatherData = useSelector(
        (state: RootState) => state.weather.weather
    ) as IWeatherData;
    const icon = useWeatherIcon(
        weather.current.condition.code,
        weather.current.condition.icon,
        weather.current.is_day
    );

    const isNextDay =
        new Date(weather.location.localtime).getHours() === 23 ? true : false;
    const nextWeatherInfo = {
        temperature:
            weather.forecast.forecastday[isNextDay ? 1 : 0].hour[
                isNextDay
                    ? 0
                    : new Date(weather.location.localtime).getHours() + 1
            ].temp_c,
        time: isNextDay
            ? '00:00'
            : `${new Date(weather.location.localtime).getHours() + 1}:00`,
        icon: useWeatherIcon(
            isNextDay
                ? weather.forecast.forecastday[1].hour[0].condition.code
                : weather.forecast.forecastday[0].hour[
                      new Date(weather.location.localtime).getHours() + 1
                  ].condition.code,
            isNextDay
                ? weather.forecast.forecastday[1].hour[0].condition.icon
                : weather.forecast.forecastday[0].hour[
                      new Date(weather.location.localtime).getHours() + 1
                  ].condition.icon,
            isNextDay
                ? weather.forecast.forecastday[1].hour[0].is_day
                : weather.forecast.forecastday[0].hour[
                      new Date(weather.location.localtime).getHours() + 1
                  ].is_day
        ),
    };

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

            <NextWeather
                temperature={nextWeatherInfo.temperature}
                time={nextWeatherInfo.time}
                icon={nextWeatherInfo.icon}
            />
        </div>
    );
};

export default DisplayCurrentWeather;
