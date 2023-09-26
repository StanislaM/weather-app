import { useWeatherIcon } from '../../../hooks/useWeatherIcon';
import { IIconData } from '../../../shared/types';
import './ForecastItem.scss';

interface IProps {
    day: string;
    icon: IIconData;
    maxTemp: number;
    minTemp: number;
}

function ForecastItem({ day, icon, maxTemp, minTemp }: IProps) {
    const iconSrc = useWeatherIcon(icon.code, icon.icon, icon.isDay);

    return (
        <div className="forecast-item">
            <h3 className="forecast-item__day">{day}</h3>
            <img
                src={iconSrc}
                alt="forecast-item-icon"
                className="forecast-item__icon"
            />
            <span className="forecast-item__temp">
                {maxTemp.toFixed(0)}/{minTemp.toFixed(0)}
            </span>
        </div>
    );
}

export default ForecastItem;
