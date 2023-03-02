import logo from '../../img/logo.svg'
import logoWhite from '../../img/logo-white.svg'
import { Link } from 'react-router-dom';
import { useDarkModeContext } from "../../context/DarkModeContext";
const Logo = () => {
    const {darkMode} = useDarkModeContext()

    return (
        <>
        <Link className="navbar-brand d-flex align-content-center" to={"/"}> 
            <img className={`align-self-center  align-text-center d-inline-block ${darkMode ? 'd-none' : 'd-block'}`} src={logo} alt={"logo"} style={{ height: 30 }} />
            <img className={`align-self-center  align-text-center d-inline-block ${darkMode ? 'd-block' : 'd-none'}`} src={logoWhite} alt={"logo"} style={{ height: 30 }} />
            <span className={`logoText align-self-center d-inline-block align-text-center ${darkMode ? 'text-white' : 'text-dark'}`}>Nina's shop</span>
           
        </Link>
          
        </>
    );
}

export default Logo;
