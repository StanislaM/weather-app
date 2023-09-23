export interface ICurrent {
    temp_c: number;
    is_day: 1 | 0;
    condition: {
        text: string;
        icon: string;
        code: number;
    };
    wind_kph: number;
    pressure_mb: number;
    feelslike_c: number;
}

export interface IHour {
    chance_of_rain: number;
}

export interface IForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
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
