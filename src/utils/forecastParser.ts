import moment from 'moment';
import { IForecastDayItem, IWeatherData } from '../shared/types';

const forecastParser = (weather: IWeatherData) => {
    return weather.forecast.forecastday
        .map((item): IForecastDayItem => {
            return {
                maxTemp: item.day.maxtemp_c,
                minTemp: item.day.mintemp_c,
                dayOfWeek: moment(new Date(item.date))
                    .format('dddd')
                    .slice(0, 3),
                icon: {
                    code: item.day.condition.code,
                    icon: item.day.condition.icon,
                    isDay: 1,
                },
            };
        })
        .slice(1);
};

export default forecastParser;
