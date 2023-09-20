import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { AppDispatch, RootState } from '../../store';
import { fetchWeather } from '../../store/weatherSlice';
import { icons } from '../../shared/icons';
import './CityInput.scss';

const CityInput = () => {
    const dispatch = useDispatch<AppDispatch>();

    const date = useSelector((state: RootState) => {
        if (state.weather.weather?.location.localtime) {
            return moment(new Date(state.weather.weather.location.localtime));
        } else {
            return undefined;
        }
    });
    const [city, setCity] = useState('Chernihiv');

    const onSearch = () => {
        dispatch(fetchWeather(city));
    };

    return (
        <div className="city-input">
            <input
                className="city-input__input"
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setCity(e.currentTarget.value)
                }
                value={city}
                style={
                    city.length > 9 ? { width: `${city.length * 1.75}rem` } : {}
                }
            />
            <button className="city-input__btn" onClick={onSearch}>
                <img src={icons.searchIcon.src} />
            </button>

            {/* DATE AND TIME */}
            {date && (
                <div className="current-date__wrapper">
                    <div className="current-date__date">
                        {date.format('DD.MM.YYYY')}
                        <br />
                        {date.format('dddd')}
                    </div>

                    <div className="current-date__time">
                        {date.format('HH:mm')}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CityInput;
