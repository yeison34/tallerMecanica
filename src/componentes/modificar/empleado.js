import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Insertar=()=>{
    let navigate=useNavigate();
    let id=useParams();
    let codigo=id['id'];

    const url="http://localhost/taller/ciudades/?consultar";
    const urlEmpleado="http://localhost/taller/empleados/?empleado="+codigo;
    const urlInsert="http://localhost/taller/empleados/?insertar";
    const urlEspecialidad="http://localhost/taller/empleados/?especialidad";
    const urlModificar="http://localhost/taller/empleados/?actualizar";

    const[datos,setDatos]=useState([]);
    const[ciudad,setCiudad]=useState("");
    const[especialidad,setEspecialidad]=useState([]);
    const[empleado,setEmpleado]=useState([]);


    const cargarCiudades=()=>{
        fetch(url)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            //console.log(respuesta);
            setDatos(respuesta);
        })
        .then(console.log)
    }

    const cargarDatos=()=>{
        fetch(urlEmpleado)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            console.log(respuesta);
            setEmpleado(respuesta);
        })
        .then(console.log)
    }

    const cargarEspecialidad=()=>{
        fetch(urlEspecialidad)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            //console.log(respuesta);
            setEspecialidad(respuesta);
        })
        .then(console.log)
    }

    const capturarDatos=(e)=>{
       setEmpleado({
        ...empleado,[e.target.name]:e.target.value
       });
    }

    const enviarDatos=(e)=>{
        e.preventDefault();
        console.log(empleado);
        fetch(urlModificar,{
            method:"POST",
            body:JSON.stringify(empleado)
        })
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            alert("El Registro de Modificado Satisfactoriamente");
            navigate("/logeo/empleados");
        })
        .catch(console.log)
    }

    useEffect(()=>{
        cargarDatos()
        cargarCiudades()
        cargarEspecialidad()
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
                                <input type="text" value={empleado.cedula} onChange={capturarDatos}
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
                                <input type="text" value={empleado.nombres} onChange={capturarDatos}
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
                                <input type="text" value={empleado.apellidos} onChange={capturarDatos}
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
                                <input type="date" value={empleado.fecha_nacimiento} onChange={capturarDatos}
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
                                <input type="text" value={empleado.direccion} onChange={capturarDatos}
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
                                <input type="text" value={empleado.telefono} onChange={capturarDatos}
                                    className="form-control" name="telefono" id="" aria-describedby="helpId" placeholder="Telefono"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Email:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" value={empleado.email} onChange={capturarDatos}
                                    className="form-control" name="email" id="" aria-describedby="helpId" placeholder="Email"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Fecha Ingreso:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="date" value={empleado.fecha_ingreso} onChange={capturarDatos}
                                    className="form-control" name="fecha_ingreso" id="" aria-describedby="helpId" placeholder=""/>
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
                                        {datos.map((ciudades)=>(
                                             (ciudades.nombre==empleado.nombre)?(
                                                    <option selected key={ciudades.nombre} value={ciudades.id_ciudad}>{ciudades.nombre}</option>
                                                ):
                                                (
                                                    <option key={ciudades.nombre} value={ciudades.id_ciudad}>{ciudades.nombre}</option>
                                                )  
                                        ))}
                                    </select>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Especialidad:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                    <select onChange={capturarDatos} name="id_especialidad">
                                        <option>Seleccionar</option>
                                        {especialidad.map((opciones)=>(
                                             (opciones.nombre==empleado.especialidad)?(
                                                <option key={opciones.id_especialidad} selected value={opciones.id_especialidad}>{opciones.nombre}</option>
                                             ):(
                                                <option key={opciones.id_especialidad} value={opciones.id_especialidad}>{opciones.nombre}</option>
                                             )   
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
                <div className="container">
                    <div className="centrar">
                        <div className="row boton">
                            <button className="btn btn-success" onClick={enviarDatos}>Actualizar</button>
                        </div>
                    </div>
                </div>        
            </div>
        </>
    )
}

export default Insertar