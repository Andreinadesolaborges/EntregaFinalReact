import './botonDarkMode.css'

//Context
import { useDarkModeContext } from '../../../context/DarkModeContext';

export const BotonDarkMode = () => {
    const { toggleDarkMode } = useDarkModeContext();
    return (
        <label className="switch">
            <input type="checkbox" onInput={() => toggleDarkMode()}/>
            <span className="slider" />
        </label>

    );
}