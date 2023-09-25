import { IIconData, IWeatherData } from '../shared/types';

interface INextWeatherData {
    temperature: number;
    time: string;
}

const nextWeatherParser = (
    weather: IWeatherData
): [INextWeatherData, IIconData] => {
    const isNextDay =
        new Date(weather.location.localtime).getHours() === 23 ? true : false;

    const iconData: IIconData = {
        code: isNextDay
            ? weather.forecast.forecastday[1].hour[0].condition.code
            : weather.forecast.forecastday[0].hour[
                  new Date(weather.location.localtime).getHours() + 1
              ].condition.code,
        icon: isNextDay
            ? weather.forecast.forecastday[1].hour[0].condition.icon
            : weather.forecast.forecastday[0].hour[
                  new Date(weather.location.localtime).getHours() + 1
              ].condition.icon,
        isDay: isNextDay
            ? weather.forecast.forecastday[1].hour[0].is_day
            : weather.forecast.forecastday[0].hour[
                  new Date(weather.location.localtime).getHours() + 1
              ].is_day,
    };

    const nextWeatherData: INextWeatherData = {
        temperature:
            weather.forecast.forecastday[isNextDay ? 1 : 0].hour[
                isNextDay
                    ? 0
                    : new Date(weather.location.localtime).getHours() + 1
            ].temp_c,
        time: isNextDay
            ? '00:00'
            : `${new Date(weather.location.localtime).getHours() + 1}:00`,
    };

    return [nextWeatherData, iconData];
};

export default nextWeatherParser;
