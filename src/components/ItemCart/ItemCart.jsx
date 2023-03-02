import { useDarkModeContext } from "../../context/DarkModeContext";
export const ItemCart = ({item}) => {
    const {darkMode} = useDarkModeContext();
    return (
        <div className={`card ${darkMode ? 'text-white bg-dark' : 'text-dark bg-white' }  mb-3 cardCart d-flex align-items-center mx-auto`}>
            <div className="row g-0 d-flex align-items-center">
                <div className="col-md-4 d-flex align-items-center">
                    <img src={item.img} alt={`Imagen de producto ${item.nombre}`} className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className="card-body">
                        <h3 className="card-title">{item.nombre} {item.modelo}</h3>
                        <p className="card-text">Cantidad: {item.cantidad}</p>
                        <p className="card-text">Precio Unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text">Subtotal: ${new Intl.NumberFormat('de-DE').format(item.precio * item.cantidad)}</p>
                    </div>
                </div>
                <div className="col-md-2 text-center d-flex align-items-center">
                <button className={`btn btn-danger zoomIn d-block mx-auto`} onClick= {() =>"borrar"}>x</button>
                </div>
                
            </div>  
        </div>
    );
}
