import {useState, useEffect} from "react";
import { Itemdetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
export const Itemdetailcontainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(products => { 
        const item = products.find(prod => prod.id === parseInt(id))
        setProducto(item)
    })
    }, [])

    return (
        <>
             <div className="row align-items-center py-3">
                <Itemdetail item={producto}/>
            </div>
        </>
    );
}


