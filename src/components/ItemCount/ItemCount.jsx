import { useState } from "react";
import { toast } from "react-toastify";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Itemcount = ({valInicial, stock, onAdd}) => {
    const {darkMode} = useDarkModeContext();
    const [contador, setContador] = useState (valInicial);

    const sumar = () => (contador < stock) && setContador(contador + 1);
    const restar = () => (contador > valInicial) && setContador(contador - 1);

    const agregarCarrito = () => {
        onAdd(contador);
        toast.success('🦄 El producto ha sido agregado');
    };
    return (
        <>
            <div className="text-center">
            <button className={`btn ${darkMode ? 'btn-black' : 'btn-secondary'} pad-btn-counter`} onClick={()=>restar()}>-</button>
            <span className="mx-1">{contador}</span>
            <button className={`btn ${darkMode ? 'btn-black' : 'btn-secondary'} pad-btn-counter`} onClick={()=>sumar()}>+</button>
            </div>
            <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn d-block mx-auto`} onClick={()=>agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}

export default Itemcount;
