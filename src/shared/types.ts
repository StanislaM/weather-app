export interface ICondition {
    text: string;
    icon: string;
    code: number;
}

export interface ICurrent {
    temp_c: number;
    is_day: 1 | 0;
    condition: ICondition;
    wind_kph: number;
    pressure_mb: number;
    feelslike_c: number;
}

export interface IHour {
    chance_of_rain: number;
    temp_c: number;
    condition: ICondition;
    is_day: 1 | 0;
}

export interface IForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: ICondition;
    };
    hour: IHour[];
}

export interface IWeatherData {
    location: {
        localtime: string;
    };
    current: ICurrent;
    forecast: { forecastday: IForecastDay[] };
}

export interface IIconData {
    code: number;
    icon: string;
    isDay: 1 | 0;
}

export interface IForecastDayItem {
    maxTemp: number;
    minTemp: number;
    dayOfWeek: string;
    icon: IIconData;
}
