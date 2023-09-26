import { useSelector } from 'react-redux';
import './Forecast.scss';
import { RootState } from '../../store';
import forecastParser from '../../utils/forecastParser';
import { IWeatherData } from '../../shared/types';
import ForecastItem from './ForecastItem';

const Forecast = () => {
    const weather = useSelector(
        (state: RootState) => state.weather.weather as IWeatherData
    );
    const forecast = forecastParser(weather);

    return (
        <div className="forecast">
            {forecast.map((item) => (
                <ForecastItem
                    key={item.dayOfWeek}
                    day={item.dayOfWeek}
                    icon={item.icon}
                    maxTemp={item.maxTemp}
                    minTemp={item.minTemp}
                />
            ))}
        </div>
    );
};

export default Forecast;
