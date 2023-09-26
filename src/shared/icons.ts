import SearchIcon from '../assets/icons/search-icon.svg';
import SpinnerIcon from '../assets/icons/spinner-icon.svg';
import ErrorIcon from '../assets/icons/error-icon.svg';
import ArrowIcon from '../assets/icons/arrow-icon.svg';
import WindIcon from '../assets/icons/wind-icon.svg';
import PressureIcon from '../assets/icons/pressure-icon.svg';
import ChanceOfRainIcon from '../assets/icons/chance-of-rain-icon.svg';
import FeelsLikeIcon from '../assets/icons/feels-like-icon.svg';
import EyeIcon from '../assets/icons/eye-icon.svg';
import LockUnlockedIcon from '../assets/icons/lock-unlocked-icon.svg';
import LockLockedIcon from '../assets/icons/lock-locked-icon.svg';
import NextArrowsIcon from '../assets/icons/next-arrows-icon.svg';

import CloudyDayIcon from '../assets/icons/cloudy-day-icon.svg';
import CloudyNightIcon from '../assets/icons/cloudy-night-icon.svg';
import ClearNightIcon from '../assets/icons/clear-night-icon.svg';
import SunnyDayIcon from '../assets/icons/sunny-day-icon.svg';
import PartlyCloudyDayIcon from '../assets/icons/partly-cloudy-day-icon.svg';
import PartlyCloudyNightIcon from '../assets/icons/partly-cloudy-night-icon.svg';

export const icons = {
    searchIcon: {
        src: SearchIcon,
        code: -1,
        isDay: -1,
    },
    spinnerIcon: {
        src: SpinnerIcon,
        code: -1,
        isDay: -1,
    },
    errorIcon: {
        src: ErrorIcon,
        code: -1,
        isDay: -1,
    },
    arrowIcon: {
        src: ArrowIcon,
        code: -1,
        isDay: -1,
    },
    windIcon: {
        src: WindIcon,
        code: -1,
        isDay: -1,
    },
    pressureIcon: {
        src: PressureIcon,
        code: -1,
        isDay: -1,
    },
    chanceOfRainIcon: {
        src: ChanceOfRainIcon,
        code: -1,
        isDay: -1,
    },
    feelsLike: {
        src: FeelsLikeIcon,
        code: -1,
        isDay: -1,
    },
    eyeIcon: {
        src: EyeIcon,
        code: -1,
        isDay: -1,
    },
    lockUnlockedIcon: {
        src: LockUnlockedIcon,
        code: -1,
        isDay: -1,
    },
    lockLockedIcon: {
        src: LockLockedIcon,
        code: -1,
        isDay: -1,
    },
    nextArrowsIcon: {
        src: NextArrowsIcon,
        code: -1,
        isDay: -1,
    },
    //WEATHER ICONS
    cloudyDayIcon: {
        src: CloudyDayIcon,
        isDay: 1,
        code: 1006,
    },
    cloudyNightIcon: {
        src: CloudyNightIcon,
        isDay: 0,
        code: 1006,
    },

    clearNightIcon: {
        src: ClearNightIcon,
        isDay: 0,
        code: 1000,
    },
    sunnyDayIcon: {
        src: SunnyDayIcon,
        isDay: 1,
        code: 1000,
    },
    partlyCloudyDayIcon: {
        src: PartlyCloudyDayIcon,
        isDay: 1,
        code: 1003,
    },
    partlyCloudyNightIcon: {
        src: PartlyCloudyNightIcon,
        isDay: 0,
        code: 1003,
    },
};
