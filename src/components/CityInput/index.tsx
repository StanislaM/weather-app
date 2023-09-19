import { useState } from 'react';
import moment from 'moment';
import { icons } from '../../shared/icons';
import './CityInput.scss';

interface IProps {}

const CityInput = (props: IProps) => {
    const date = moment();
    const [city, setCity] = useState('Chernihiv');

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
            <button className="city-input__btn">
                <img src={icons.searchIcon} />
            </button>

            {/* DATE AND TIME */}
            <div className="current-date__wrapper">
                <div className="current-date__date">
                    {date.format('DD.MM.YYYY')}
                    <br />
                    {date.format('dddd')}
                </div>

                <div className="current-date__time">{date.format('HH:mm')}</div>
            </div>
        </div>
    );
};

export default CityInput;
