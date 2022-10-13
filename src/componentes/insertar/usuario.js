import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
const Insertar=()=>{
    let navigate=useNavigate();
    const url="http://localhost/taller/ciudades/?consultar";
    const urlInsert="http://localhost/taller/usuarios/?insertar";

    const[datos,setDatos]=useState([]);
    const[ciudad,setCiudad]=useState("");
    const campos={
        cedula:"",
        nombre:"",
        apellido:"",
        fecha:"",
        direccion:"",
        telefono:"",
        ciudad:"",
        usuario:"",
        contrasena:""
    }

    const cargarCiudades=()=>{
        fetch(url)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            //console.log(respuesta);
            setDatos(respuesta);
        })
        .then(console.log)
    }

    const capturarDatos=(e)=>{
        campos[e.target.name]=e.target.value;
        //console.log(campos);
    }

    const enviarDatos=(e)=>{
        e.preventDefault();
        console.log(campos);
        fetch(urlInsert,{
            method:"POST",
            body:JSON.stringify(campos)
        })
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            alert("Usuario Registrado Satisfactoriamente");
            navigate("/logeo");
        })
        .catch(console.log)
    }

    useEffect(()=>{
        cargarCiudades()
    },[]);

    return(
        <>          
            <div className="contenedor">
                <div className="p-4">
                    <h3>Registro de Clientes</h3>
                </div>
                <div className="p-4">
                    <h5>General</h5>
                    <hr></hr>
                </div>
                <div className="container">
                    <div className="">
                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Cedula:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="cedula" id="" aria-describedby="helpId" placeholder="Cedula"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Nombre:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="nombre" id="" aria-describedby="helpId" placeholder="Nombre"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Apellido(s):</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="apellido" id="" aria-describedby="helpId" placeholder="Apellido(s)"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Fecha  de Nacimiento:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="date" onChange={capturarDatos}
                                    className="form-control" name="fecha" id="" aria-describedby="helpId" placeholder=""/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Dirección:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="direccion" id="" aria-describedby="helpId" placeholder="Dirección"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Telefono:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="telefono" id="" aria-describedby="helpId" placeholder="Telefono"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Ciudad:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                    <select onChange={capturarDatos} name="ciudad">
                                        <option>Seleccionar</option>
                                        {datos.map((ciudades)=>(
                                             <option key={ciudades.nombre} value={ciudades.id_ciudad}>{ciudades.nombre}</option>   
                                        ))}
                                    </select>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h5>Campos Registro Usuario y Contraseña</h5>
                    <hr></hr>
                </div>
                <div className="container">
                    <div className="">
                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Usuario:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="usuario" id="" aria-describedby="helpId" placeholder="Usuario"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Contraseña:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="contrasena" id="" aria-describedby="helpId" placeholder="Contraseña"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>
                        
                        <div className="centrar">
                        <div className="row boton">
                            <button className="btn btn-success" onClick={enviarDatos}>Registrar</button>
                        </div>
                        </div>
                    </div>
                </div>        
            </div>
        </>
    )
}

export default Insertar