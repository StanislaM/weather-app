import { icons } from '../shared/icons';

export const useWeatherIcon = (
    code: number,
    iconAltSrc: string,
    isDay: 1 | 0 | -1
) => {
    type IconsFields = keyof typeof icons;
    for (const icon in icons) {
        if (
            icons[icon as IconsFields].code === code &&
            icons[icon as IconsFields].isDay === isDay
        ) {
            return icons[icon as IconsFields].src;
        }
    }

    return iconAltSrc;
};
