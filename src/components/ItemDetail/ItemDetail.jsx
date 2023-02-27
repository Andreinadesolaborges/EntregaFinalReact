import Itemcount from "../ItemCount/ItemCount";
export const Itemdetail = ({ item }) => {
    return (
        <>
            <div className="container-fluid p-3">
                <div className="row g-0 align-items-center px-3">
                    <div className="col-md-4 text-center align-self-center py-3">
                        <img className="card-img-top img-fluid" src={`../img/${item.img}`} alt={`Imagen de ${item.nombre}`} />
                    </div>
                    <div className="offset-md-1 col-md-6 text-center align-self-center px-3">
                        <div className="card-body">
                            <h4 className="card-title">{item.nombre}</h4>
                            <p className="card-text">{item.descripcion}</p>
                            <h6 className="price-text-detail badge rounded-pill bg-light d-block mx-auto">${new Intl.NumberFormat('de-DE').format(item.precio)}</h6>
                            <Itemcount valInicial={1} stock={item.stock} />
                            <button id={item.id} className="btn btn-primary zoomIn d-block mx-auto">Comprar</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

