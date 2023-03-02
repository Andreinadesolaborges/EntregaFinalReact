import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import React from "react";
const Categorias = React.memo(() => {
    const {darkMode} = useDarkModeContext();
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className={`btn ${darkMode ? 'text-white' : 'text-dark'}`}>Productos</button>
                </a>
                <ul className={`${darkMode ? 'dropdown-menu dropdown-menu-dark' : 'dropdown-menu'}`}>
                    <li><Link className="dropdown-item" to={"/category/Aromaterapia"}>Aromaterapia</Link></li>
                    <li><Link className="dropdown-item" to={"/category/Sahumerios"}>Sahumerios</Link></li>
                    <li><Link className="dropdown-item" to={"/category/Libros"}>Libros</Link></li>
                    <li><Link className="dropdown-item" to={"/category/Piedras"}>Piedras y gemas</Link></li>
                    <li><Link className="dropdown-item" to={"/category/Tarot"}>Tarot</Link></li>
                    <li><Link className="dropdown-item" to={"/category/Velas"}>Velas</Link></li>
                </ul>
            </li>
        </>
    );
})

export default Categorias;
