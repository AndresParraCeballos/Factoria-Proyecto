import React from 'react';
import ListadoInv from '../investigaciones/ListadoInv';
import DetallesGrupo from './DetallesGrupo';
import logousco from '../../img/logo usco.png';
import Logo from '../../img/400x400.png';
import Imagen from '../../img/400x400.png';
const Investigaciones = () => {
    return (
        <div className="container">

            <div className="fondoinves ">

                <div className="fondotittle">
                    <div className="row align-items-center">
                        <div className="col-10 ">
                            <img src={logousco} className=" w-90 m-0 p-0 img-usco" />
                        </div>
                        <div className="col-2">
                            <a type="button" className="btn btn-danger button-login text-light">Regresar</a>
                        </div>

                    </div>
                </div>

                <div className=" fondodatosuser ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <img className="imgperfil " src={Logo} />
                            </div>
                            <div className="col-2">
                                <h4 className=""><strong> JUAN CAMILO DEGADO MONTES</strong></h4>
                            </div>
                            <div className="col-2">
                                <h4 className=""> 20182171875</h4>
                            </div>
                            <div className="col-2">
                                <a type="button" className="btn btn-block  button-perfil m-3 ">Perfil</a>
                            </div>
                            <div className="col-2">
                                <a type="button" className="btn btn-block button-perfil m-3">Regresar</a>
                            </div>
                            <div className="col-2">
                                <a type="button" className="btn btn-block button-perfil m-3">Cerrar Sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr ></hr>
                <h1 className="text-center">Grupo de investigación</h1>
                <hr ></hr>

                <DetallesGrupo />

                <ListadoInv />
                <ListadoInv />

            </div>
        </div>


    );
}

export default Investigaciones;