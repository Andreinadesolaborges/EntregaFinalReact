import cart from '../../img/cart.svg'
import cartDark from '../../img/cart-dark.svg'
import { useDarkModeContext } from '../../context/DarkModeContext';
import { Link } from "react-router-dom";
import { useCarritoContext } from '../../context/CarritoContext';
const Cartwidget = () => {
    const {darkMode} = useDarkModeContext();
    const {getItemQuantity} = useCarritoContext();
    return (
        <>
            <Link className='"nav-link' to={'/cart'}>
            <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn`}>
                <img className={`align-self-center align-text-center ${darkMode ? 'd-none' : 'd-inline-block'}`}src={cart} alt={"cart"} style={{ height: 16 }}/>
                <img className={`align-self-center align-text-center ${darkMode ? 'd-inline-block' : 'd-none'}`}src={cartDark} alt={"cart"} style={{ height: 16 }}/>
                <span className="cartText">Carrito</span>
                {getItemQuantity() > 0 &&  <span className={`badge rounded-pill ${darkMode ? 'bg-primary' : 'bg-secondary'}`}>{getItemQuantity()}</span>}
            </button>
            </Link>
            
           
        </>
    );
}

export default Cartwidget;
