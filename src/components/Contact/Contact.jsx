import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const datosFormulario = React.useRef();
    let navigate = useNavigate();

    const consultarFormulario  = (e) =>  {

        e.preventDefault();
        const datForm = new FormData (datosFormulario.current);
        const contacto = Object.fromEntries(datForm);
        console.log (contacto);
        e.target.reset();
        navigate ("/");
    }

    return (
        <div className="container">
            <div className="col-12 text-center align-self-center mt-3">
                <h2>Contacto</h2>
            </div>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Celular</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="textarea" className="form-label">Mensaje</label>
                    <textarea className="form-control" name="textarea" rows={3} defaultValue={""} required />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>


    );
}