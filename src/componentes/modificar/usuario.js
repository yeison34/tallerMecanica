import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Modificar=()=>{
    let id=useParams();
    let codigo=id['id'];
    let navigate=useNavigate();

    const url="http://localhost/taller/usuarios/?usuario="+codigo;
    const urlCiudades="http://localhost/taller/ciudades/?consultar";
    const urlInsert="http://localhost/taller/usuarios/?editar";

    const[datos,setDatos]=useState([]);
    const[ciudad,setCiudad]=useState([]);
  
    const cargarCiudades=()=>{
        fetch(urlCiudades)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            //console.log(respuesta);
            setCiudad(respuesta);
        })
        .then(console.log)
    }

    const cargarDatos=()=>{
        fetch(url)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            setDatos(respuesta);
        })
        .then(console.log)
    }

    const capturarDatos=(e)=>{
        setDatos({...datos,[e.target.name]:e.target.value});
    }

    const enviarDatos=(e)=>{
        console.log(datos);
        //const codigo1=datos['id_usuario'];
        e.preventDefault();
        
        fetch(urlInsert,{
            method:"POST",
            body:JSON.stringify(datos)
        })
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            alert("Se ha modificado satisfactoriamente");
            navigate("/logeo");
        })
        .catch(console.log)
    }

    useEffect(()=>{
        cargarDatos()
        cargarCiudades()
    },[]);

    return(
        <>  
            <div className="contenedor">
                <div className="p-4">
                    <h3>Actualizar Datos</h3>
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
                                <input type="text" value={datos.cedula} onChange={capturarDatos}
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
                                <input type="text" value={datos.nombres} onChange={capturarDatos}
                                    className="form-control" name="nombres" id="" aria-describedby="helpId" placeholder="Nombre"/>
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
                                <input type="text" value={datos.apellidos} onChange={capturarDatos}
                                    className="form-control" name="apellidos" id="" aria-describedby="helpId" placeholder="Apellido(s)"/>
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
                                <input type="date" value={datos.fecha_nacimiento} onChange={capturarDatos}
                                    className="form-control" name="fecha_nacimiento" id="" aria-describedby="helpId" placeholder=""/>
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
                                <input type="text" value={datos.direccion} onChange={capturarDatos}
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
                                <input type="text" value={datos.telefono} onChange={capturarDatos}
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
                                    <select onChange={capturarDatos} name="id_ciudad">
                                        <option>Seleccionar</option>
                                        {
                                            ciudad.map((ciudades)=>(
                                                (ciudades.nombre==datos.nombre)?(
                                                    <option selected value={ciudades.id_ciudad}>{ciudades.nombre}</option>)
                                                :
                                                (
                                                    <option value={ciudades.id_ciudad}>{ciudades.nombre}</option>
                                                )
                                            ))
                                        }
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
                            <button className="btn btn-success" onClick={enviarDatos}>Actualizar</button>
                        </div>
                        </div>
                    </div>
                </div>        
            </div>
         </>
    )
}

export default Modificar