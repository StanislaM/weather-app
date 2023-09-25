import { IIconData, IWeatherData } from '../shared/types';

interface ICurrentWeatherData {
    temperature: number;
    maxTemp: number;
    minTemp: number;
    conditions: string;
}

const currentWeatherParser = (
    weather: IWeatherData
): [ICurrentWeatherData, IIconData] => {
    const iconData: IIconData = {
        code: weather.current.condition.code,
        icon: weather.current.condition.icon,
        isDay: weather.current.is_day,
    };

    const currentWeatherData: ICurrentWeatherData = {
        temperature: weather.current.temp_c,
        maxTemp: weather.forecast.forecastday[0].day.maxtemp_c,
        minTemp: weather.forecast.forecastday[0].day.mintemp_c,
        conditions: weather.current.condition.text,
    };

    return [currentWeatherData, iconData];
};

export default currentWeatherParser;
