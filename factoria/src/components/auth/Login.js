import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/400x400.png';

const Login = () => {
    return (
        <div>
            <div className="barra"></div>
            <div className="container">
                <form className="form relative">
                    <img className="imglogin absolute" src={Logo}/>
                    <h1 className="text-center">Inicio Sesion</h1>

                    <div className="campo-form ">
                    
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            className="input"
                        />
                    </div>

                    <div className="campo-form ">
                        
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu contraseña"
                            className="input"
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Entrar"
                            className="button"
                        />
                    </div> 

                    <a href="#!">¿Olvidaste tu contraseña?</a>

                    <Link to={'/register'} className="enlace-cuenta">
                        ¿No tienes una cuenta?
                    </Link>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrate"
                            className="button-login"
                        />
                    </div>
                </form>
            </div>
        </div>
        
        
    );
}
 
export default Login;





