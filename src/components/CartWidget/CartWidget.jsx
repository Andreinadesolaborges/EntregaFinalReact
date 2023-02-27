import cart from '../../img/cart.svg'
const Cartwidget = ({ cantCarrito }) => {
    return (
        <>
            <button className="btn btn-primary zoomIn">
                <img className="align-self-center d-inline-block align-text-center" src={cart} alt={"cart"} style={{ height: 16 }}/>
                <span className="cartText">Carrito</span>
                <span className="badge rounded-pill text-bg-light">{cantCarrito}</span>
            </button>

        </>
    );
}

export default Cartwidget;
