import React from 'react';
import Imagen from '../../img/400x400.png';
const ListadoInv = () => {
    return (
        <div className="cardview">
            <div className="flexbox">
                <img className="imagen" src={Imagen}/>
                <div className="encabezado">
                    <h2> Titulo 1 </h2>
                    Tipo:<span>trabajo de grado</span>
                    Fecha:<span>11/02/2021</span>
                </div>
                <p>Lorem ipsummasdioashdsaioh asdhasoidas masdaosiudas masohiudhasdhsa.</p>
            </div>
        </div>
     );
}
 
export default ListadoInv;