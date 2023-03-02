import Itemcount from "../ItemCount/ItemCount";
import { useDarkModeContext } from "../../context/DarkModeContext";
export const Itemdetail = ({ item }) => {
    const { darkMode } = useDarkModeContext();
    const onAdd = (cantidad) => {
        console.log(cantidad);
        console.log(item);
    }

    return (
        <>
            <div className="container-fluid p-3">
                <div className="row g-0 align-items-center px-3">
                    <div className="col-md-4 text-center align-self-center py-3">
                        <img className="card-img-top img-fluid" src={item.img} alt={`Imagen de ${item.nombre}`} />
                    </div>
                    <div className="offset-md-1 col-md-6 text-center align-self-center px-3">
                        <div className="card-body">
                            <h4 className={`card-title ${darkMode ? 'text-light' : 'text-dark'}`}>{item.nombre}</h4>
                            <p className="card-text">{item.descripcion}</p>
                            <h6 className={`price-text-detail badge rounded-pill ${darkMode ? 'bg-primary' : 'bg-light'} d-block mx-auto`}  >${new Intl.NumberFormat('de-DE').format(item.precio)}</h6>
                            <Itemcount valInicial={1} stock={item.stock} onAdd={onAdd} />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

