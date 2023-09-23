import { useState } from 'react';
import { icons } from '../../../shared/icons';
import './AdditionalInfo.scss';

interface IProps {
    wind: number;
    pressure: number;
    chanceOfRain: number;
    feelsLike: number;
}

const AdditionalInfo = ({
    wind,
    pressure,
    chanceOfRain,
    feelsLike,
}: IProps) => {
    const [isVisible, setVisibility] = useState(false);
    const [isLocked, setLock] = useState(false);

    return (
        <div className="additional-info">
            <div
                className="additional-info__wrapper"
                style={{ opacity: isVisible || isLocked ? '100%' : '0%' }}
                onMouseLeave={() => setVisibility(false)}
            >
                <div className="additional-info__item">
                    <img
                        src={icons.windIcon.src}
                        alt="wind-icon"
                        className="additional-info__icon"
                    />
                    <span className="additional-info__text">
                        {wind}
                        <br />
                        km/h
                    </span>
                </div>
                <div className="additional-info__item">
                    <img
                        src={icons.pressureIcon.src}
                        alt="pressure-icon"
                        className="additional-info__icon"
                    />
                    <span className="additional-info__text">
                        {pressure} <br />
                        mb
                    </span>
                </div>
                <div className="additional-info__item">
                    <img
                        src={icons.chanceOfRainIcon.src}
                        alt="chance-of-rain-icon"
                        className="additional-info__icon"
                    />
                    <span className="additional-info__text">
                        {chanceOfRain}%
                    </span>
                </div>
                <div className="additional-info__item">
                    <img
                        src={icons.feelsLike.src}
                        alt="feels-like-icon"
                        className="additional-info__icon"
                    />
                    <span className="additional-info__text temperature temperature-small">
                        {feelsLike}
                    </span>
                </div>
            </div>

            <img
                src={icons.eyeIcon.src}
                alt="eye-icon"
                className="additional-info__eye"
                style={{ opacity: isVisible || isLocked ? '0%' : '50%' }}
                onMouseEnter={() => setVisibility(true)}
                onClick={() => setLock((state) => !state)}
            />

            <img
                src={
                    isLocked
                        ? icons.lockLockedIcon.src
                        : icons.lockUnlockedIcon.src
                }
                alt="lock-icon"
                className="additional-info__lock"
                style={{ opacity: isVisible || isLocked ? '100%' : '0%' }}
            />
        </div>
    );
};

export default AdditionalInfo;
