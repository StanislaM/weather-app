export interface IForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
    };
}

export interface IWeatherData {
    location: {
        localtime: string;
    };
    current: {
        temp_c: number;
        is_day: 1 | 0;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
    };
    forecast: { forecastday: IForecastDay[] };
}
