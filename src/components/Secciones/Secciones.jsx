import { Link } from "react-router-dom";
const Secciones = () => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/contacto"><button className="btn btn-light">Contacto</button></Link>
      </li>
    </>
  );
}

export default Secciones;
