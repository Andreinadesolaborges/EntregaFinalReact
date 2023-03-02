import {useState, useEffect} from "react";
import { Itemdetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProducto } from "../../firebase/firebase";
export const Itemdetailcontainer = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getProducto(id)
        .then(item => { 
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


