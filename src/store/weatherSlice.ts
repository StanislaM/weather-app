import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWeatherData } from '../shared/types';

type FetchStatus = 'idle' | 'fetching' | 'successful' | 'error';

interface IWeatherState {
    weather: IWeatherData;
    fetchStatus: FetchStatus;
}

const initialState: IWeatherState = {
    weather: {},
    fetchStatus: 'idle',
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchWeather: (state, action: PayloadAction<string>) => {
            state.weather = action.payload;
        },
    },
});

export const { fetchWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
