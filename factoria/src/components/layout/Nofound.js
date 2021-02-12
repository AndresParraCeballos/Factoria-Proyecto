import React from 'react';
import logousco from '../../img/logo usco.png';

const Nofound = () => {
    return (  
        <div className="container">
            <div className="fondo">
                <img src={logousco} className="img-usco"/>
                    <div>
                        <h1 className="text-center">Error 404</h1>
                        <p className="parrafo text-center">Lo sentimos, no pudimos encontrar la pagina solicitada.</p>
                    </div>
            </div>
        </div>
    );
}
 
export default Nofound;