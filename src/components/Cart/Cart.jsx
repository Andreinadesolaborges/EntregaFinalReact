import { useDarkModeContext } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
export const Cart = () => {

    const { darkMode } = useDarkModeContext();
    const carrito = [{ nombre: "Arroz", img: 'https://firebasestorage.googleapis.com/v0/b/proyecto-react-75934.appspot.com/o/amatista.png?alt=media&token=be48dfac-8675-4ff7-bd36-8fe273fea685', modelo: "1", precio: 4000, cantidad: 5 },
    { nombre: "Fideos", modelo: "2", img: 'https://firebasestorage.googleapis.com/v0/b/proyecto-react-75934.appspot.com/o/amatista.png?alt=media&token=be48dfac-8675-4ff7-bd36-8fe273fea685', precio: 3000, cantidad: 2 },
    { nombre: "Papas", modelo: "3", img: 'https://firebasestorage.googleapis.com/v0/b/proyecto-react-75934.appspot.com/o/amatista.png?alt=media&token=be48dfac-8675-4ff7-bd36-8fe273fea685', precio: 5000, cantidad: 3 }]

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
                                <h3 className={`${darkMode ? 'text-light' : 'text-dark'}`}>Resumen de la compra : precio total</h3>
                                <Link className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn d-block mx-auto`}>Continuar comprando</button></Link>
                                <button className={`btn btn-danger zoomIn d-block mx-auto`}>Vaciar carrito</button>
                                <Link className="nav-link" to={'/checkout'}><button className={`btn btn-success zoomIn d-block mx-auto`}>🪄 Finalizar compra</button></Link>
                            </div>
                        </div>
                    </div>
                </>
            }


        </>
    )


}

