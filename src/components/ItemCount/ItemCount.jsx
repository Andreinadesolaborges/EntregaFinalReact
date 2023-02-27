import { useState } from "react";
const Itemcount = ({valInicial, stock}) => {
    
    const [contador, setContador] = useState (valInicial);

    const sumar = () => (contador < stock) && setContador(contador + 1);
    const restar = () => (contador > valInicial) && setContador(contador - 1)

    return (
        <>
            <div className="text-center">
            <button className="btn btn-secondary pad-btn-counter" onClick={()=>restar()}>-</button>
            <span className="mx-1">{contador}</span>
            <button className="btn btn-secondary pad-btn-counter" onClick={()=>sumar()}>+</button>
            </div>
        </>
    );
}

export default Itemcount;
