import Itemcount from "../ItemCount/ItemCount";
const Cardproduct = ({title,description, precio,url}) => {
    return (
        <>
            <div className="card hvr-float-shadow my-3">
                <img src={url} className="card-img-top img-fluid" alt={"img"} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6 className="price-text badge rounded-pill bg-light d-block"> ${precio}</h6>
                    <Itemcount valInicial={1} stock={10}/>
                    <a href="#" className="btn btn-primary d-block zoomIn ">Agregar</a>
                </div>
            </div>
        </>
    );
}

export default Cardproduct;
