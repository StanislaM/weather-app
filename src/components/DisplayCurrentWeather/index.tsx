import { useSelector } from 'react-redux';
import CurrentWeather from './CurrentWeather';

import { RootState } from '../../store';
import { IWeatherData } from '../../shared/types';
import currentWeatherParser from '../../utils/currentWeatherParser';
import { useWeatherIcon } from '../../hooks/useWeatherIcon';
import './DisplayCurrentWeather.scss';
import AdditionalInfo from './AdditionalInfo';
import NextWeather from './NextWeather';
import addWeatherInfoParser from '../../utils/addWeatherInfoParser';
import nextWeatherParser from '../../utils/nextWeatherParser';

const DisplayCurrentWeather = () => {
    const weather: IWeatherData = useSelector(
        (state: RootState) => state.weather.weather
    ) as IWeatherData;

    const [currentWeatherData, currentWeatherIconData] =
        currentWeatherParser(weather);
    const currentWeatherIcon = useWeatherIcon(
        currentWeatherIconData.code,
        currentWeatherIconData.icon,
        currentWeatherIconData.isDay
    );

    const addWeatherInfo = addWeatherInfoParser(weather);

    const [nextWeatherData, nextWeatherIconData] = nextWeatherParser(weather);
    const nextWeatherIcon = useWeatherIcon(
        nextWeatherIconData.code,
        nextWeatherIconData.icon,
        nextWeatherIconData.isDay
    );

    return (
        <div className="display-current-weather">
            <AdditionalInfo
                wind={addWeatherInfo.wind}
                feelsLike={addWeatherInfo.feelsLike}
                pressure={addWeatherInfo.pressure}
                chanceOfRain={addWeatherInfo.chanceOfRain}
            />

            <CurrentWeather
                temperature={currentWeatherData.temperature}
                maxTemp={currentWeatherData.maxTemp}
                minTemp={currentWeatherData.minTemp}
                conditions={currentWeatherData.conditions}
                icon={currentWeatherIcon}
            />

            <NextWeather
                temperature={nextWeatherData.temperature}
                time={nextWeatherData.time}
                icon={nextWeatherIcon}
            />
        </div>
    );
};

export default DisplayCurrentWeather;
