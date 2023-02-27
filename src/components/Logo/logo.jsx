import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <>
        <Link className="navbar-brand d-flex align-content-center" to={"/"}> 
        <img className="align-self-center d-inline-block align-text-center" src={logo} alt={"logo"} style={{ height: 30 }} />
                    <span className="logoText align-self-center d-inline-block align-text-center">Nina's shop</span>
        </Link>
          
        </>
    );
}

export default Logo;
