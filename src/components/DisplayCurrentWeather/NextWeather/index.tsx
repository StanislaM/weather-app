import './NextWeather.scss';

interface IProps {
    temperature: number;
    time: string;
    icon: string;
}

const NextWeather = ({ temperature, time, icon }: IProps) => {
    return (
        <div className="next-weather">
            <img
                src={icon}
                alt="next-weather-icon"
                className="next-weather__icon"
            />
            <h3 className="next-weather__temperature temperature">
                {temperature}
            </h3>
            <hr className="next-weather__divider" />
            <p className="next-weather__time">{time}</p>
        </div>
    );
};

export default NextWeather;
