import { icons } from '../../../shared/icons';
import './CurrentWeather.scss';

interface IProps {
    temperature: number;
    maxTemp: number;
    minTemp: number;
    conditions: string;
    icon: string;
}

const CurrentWeather = ({
    temperature,
    maxTemp,
    minTemp,
    conditions,
    icon,
}: IProps) => {
    return (
        <div className="current-weather">
            <img
                src={icon}
                alt="current-werather-icon"
                className="current-weather__icon"
            />
            <h2 className="current-weather__temperature temperature">
                {temperature}
            </h2>
            <div className="current-weather__max-min">
                <h3 className="current-weather__min temperature">
                    <img src={icons.arrowIcon.src} />
                    {minTemp.toFixed(0)}
                </h3>
                <h3 className="current-weather__max temperature">
                    <img src={icons.arrowIcon.src} />
                    {maxTemp.toFixed(0)}
                </h3>
            </div>
            <p className="current-weather__conditions">{conditions}</p>

            <img
                src={icons.nextArrowsIcon.src}
                alt="next-arrows-icon"
                className="next-weather-icon"
            />
        </div>
    );
};

export default CurrentWeather;
