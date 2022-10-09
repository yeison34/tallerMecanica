import React from 'react';
import { redirect,useNavigate } from 'react-router-dom';



const Login=()=>{
    let navigate=useNavigate(); 
    const datos={
        usuario:"",
        contrasena:""
    }
    const capturarDatos=(e)=>{
        datos[e.target.name]=e.target.value;
        console.log(datos);
    }

    const verificardatos=(e)=>{

        console.log(datos);
        e.preventDefault();
        fetch("http://localhost/taller/logeo/?verificar",{
            method:"POST",
            body:JSON.stringify(datos)
        })
        .then(datosRespuesta=>datosRespuesta.json())
        .then((respuesta)=>{
            console.log(respuesta);
            if(!respuesta){
                alert("usuario y contraseña incorrectas");
            }else{
                return navigate("/logeo");
            }
        })
    }

    return(
        <>
            <div>
                <div className="card login-tamano border-secondary">
                    <div className="card-header border-secondary">
                        LOGIN
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                          <label for="" className="">Usuario</label>
                          <input type="text" onChange={capturarDatos} className="form-control" name="usuario" id="" aria-describedby="helpId" placeholder="Usuario"/>
                          <small id="helpId" className="form-text text-muted">Usuario</small>
                        </div>
                        <div className="mb-3">
                            <label id="password_label" for="password">Contraseña</label>
                            <input id="password" onChange={capturarDatos} name="contrasena" type="password" className="form-control" placeholder="*********"/>
                            <small id="helpId" className="form-text text-muted">Contraseña</small>
                            <div className="contenedor-boton-login">
                                <button onClick={verificardatos} className="btn btn-secondary">Ingresar</button>
                                <a href="#"><h6>Olvidaste tu Contraseña?</h6></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>        
    )
}

export default Login