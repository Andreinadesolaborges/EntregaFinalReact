import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Secciones = () => {
  const {darkMode} = useDarkModeContext();
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/contacto"><button className={`btn ${darkMode ? 'text-white' : 'text-dark'}`}>Contacto</button></Link>
      </li>
    </>
  );
}

export default Secciones;
