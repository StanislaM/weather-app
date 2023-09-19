import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IWeatherData } from '../shared/types';

const API_KEY = `9051a671de3e4758b5e201547231909`;
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;

interface IWeatherState {
    weather: IWeatherData;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | undefined;
}

const initialState: IWeatherState = {
    weather: {},
    loading: 'idle',
    error: undefined,
};

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string) => {
        const response = await axios.get(URL + city);
        const data = await response.data;
        return data;
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.weather = action.payload;
        });
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    },
});

export default weatherSlice.reducer;
