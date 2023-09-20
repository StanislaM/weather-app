import { icons } from '../shared/icons';

export const useWeatherIcon = (code: number, iconAltSrc: string) => {
    type IconsFields = keyof typeof icons;
    for (const icon in icons) {
        if (icons[icon as IconsFields].code === code) {
            return icons[icon as IconsFields].src;
        }
    }

    return iconAltSrc;
};
