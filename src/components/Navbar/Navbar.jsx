import CartWidget from "../CartWidget/CartWidget";
import Categorias from "../Categorias/Categorias";
import Secciones from "../Secciones/Secciones";
import Logo
 from "../Logo/logo";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white p-3">
        <div className="container-fluid">
          <Logo/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Categorias/>
              <Secciones/>
            </ul>
            <CartWidget cantCarrito={0}/>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
