import CityInput from '../CityInput';
import Container from '../Container';
import './App.scss';

const App = () => {
    return (
        <>
            <div className="app">
                <Container>
                    <CityInput />
                </Container>
            </div>
        </>
    );
};

export default App;
