import CartWidget from "../CartWidget/CartWidget";
import Categorias from "../Categorias/Categorias";
import Secciones from "../Secciones/Secciones";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";
import { useDarkModeContext } from "../../context/DarkModeContext";
import Logo from "../Logo/logo";

const Navbar = () => {
  const {darkMode} = useDarkModeContext()

  return (
    <>
      <nav className={`navbar navbar-expand-lg p-3 ${darkMode ? 'bg-black':'bg-white'}`}>
        <div className="container-fluid">
          <Logo/>
          <button className={`navbar-toggler ${darkMode ? 'border border-white':'border border-dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon ${darkMode ? 'navbar-toggler-icon-dark':'navbar-toggler-icon'}`} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Categorias/>
              <Secciones/>
            </ul>
            <CartWidget cantCarrito={0}/>
            <BotonDarkMode/>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
