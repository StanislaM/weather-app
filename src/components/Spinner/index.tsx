import { icons } from '../../shared/icons';
import './Spinner.scss';

function Spinner() {
    return (
        <div className="spinner">
            <img
                src={icons.spinnerIcon.src}
                alt="spinner-icon"
                className="spinner"
            />
        </div>
    );
}

export default Spinner;
