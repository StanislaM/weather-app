import { useSelector } from 'react-redux';
import CityInput from '../CityInput';
import Container from '../Container';
import './App.scss';
import { RootState } from '../../store';
import DisplayCurrentWeather from '../DisplayCurrentWeather';
import { icons } from '../../shared/icons';
import Spinner from '../Spinner';
import Forecast from '../Forecast';

const App = () => {
    const weatherLoadingStatus = useSelector(
        (state: RootState) => state.weather.loading
    );
    const errorMessage = useSelector((state: RootState) => state.weather.error);

    return (
        <>
            <div className="app">
                <Container>
                    <CityInput />

                    {weatherLoadingStatus === 'idle' && (
                        <h2 className="select-city">
                            Input city name and press{' '}
                            <img src={icons.searchIcon.src} alt="search-icon" />{' '}
                            button
                        </h2>
                    )}

                    {weatherLoadingStatus === 'pending' && <Spinner />}

                    {weatherLoadingStatus === 'failed' && (
                        <h2 className="error">
                            {(errorMessage ===
                                'Request failed with status code 400' &&
                                'City name is incorrect') ||
                                'Something went wrong '}

                            <img src={icons.errorIcon.src} alt="error-icon" />
                        </h2>
                    )}

                    {weatherLoadingStatus === 'succeeded' && (
                        <>
                            <DisplayCurrentWeather />
                            <Forecast />
                        </>
                    )}
                </Container>
            </div>
        </>
    );
};

export default App;
