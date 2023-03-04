import { useDarkModeContext } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { useCarritoContext } from "../../context/CarritoContext";
export const Cart = () => {

    const { darkMode } = useDarkModeContext();
    const {carrito, totalPrice, emptyCart} = useCarritoContext ();

    return (
        <>
            {carrito.length === 0
                ? // Si carrito esta vacío
                <>
                    <div className="row align-items-center py-3">
                        <div className="col-12 text-center align-self-center mt-3">
                            <h2 className={`${darkMode ? 'text-light' : 'text-dark'} py-3`}>El Carrito está vacío</h2>
                            <Link className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn d-block mx-auto`}>Ir a comprar productos</button></Link>
                        </div>
                    </div>
                </>
                : // Si carrito tiene productos
                <>
                    <div className="container px-5">
                        <div className="row align-items-center py-3">
                            <div className="col-12 text-center align-self-center mt-3">
                                <h2 className={`${darkMode ? 'text-light' : 'text-dark'} py-3`}>Carrito</h2>
                            </div>
                        </div>
                        <div className="row align-items-center py-3">
                            {
                                <ItemList products={carrito} plantilla={'itemCart'} />
                            }
                            <div className="divButtons text-center">
                                <h3 className={`${darkMode ? 'text-light' : 'text-dark'}`}>Resumen de la compra : ${new Intl.NumberFormat('de-DE').format(totalPrice())}</h3>
                                <Link className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn d-block mx-auto`}>Continuar comprando</button></Link>
                                <button onClick={()=> emptyCart()} className={`btn btn-danger zoomIn d-block mx-auto`}>Vaciar carrito</button>
                                <Link className="nav-link" to={'/checkout'}><button className={`btn btn-success zoomIn d-block mx-auto`}>🪄 Finalizar compra</button></Link>
                            </div>
                        </div>
                    </div>
                </>
            }


        </>
    )


}

