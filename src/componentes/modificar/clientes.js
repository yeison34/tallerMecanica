import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modificar=()=>{
    let navigate=useNavigate();
    let id=useParams();
    let codigo=id['id'];
    const url="http://localhost/taller/clientes/?cliente="+codigo;
    const urlInsert="http://localhost/taller/clientes/?modificar="+codigo;
    const urlCiudades="http://localhost/taller/ciudades/?consultar";

    const[datos,setDatos]=useState([]);
    const[ciudad,setCiudad]=useState("");
    const[especialidad,setEspecialidad]=useState([]);
    const[cliente,setCliente]=useState([]);

    const cargarCiudades=()=>{
        fetch(urlCiudades)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            //console.log(respuesta);
            setDatos(respuesta);
        })
        .then(console.log)
    }

    const cargarDatos=()=>{
        fetch(url)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            //console.log(respuesta);
            setCliente(respuesta);
        })
        .then(console.log)
    }

    const capturarDatos=(e)=>{
        setCliente({...cliente,[e.target.name]:e.target.value});
    }

    const enviarDatos=(e)=>{
        e.preventDefault();
        console.log(cliente);
        fetch(urlInsert,{
            method:"POST",
            body:JSON.stringify(cliente)
        })
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            alert("Usuario Registrado Satisfactoriamente");
            navigate("/gestionar");
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
                                <input type="text" readOnly value={codigo} onChange={capturarDatos}
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
                                <input type="text" value={cliente.nombres} onChange={capturarDatos}
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
                                <input type="text" value={cliente.apellido} onChange={capturarDatos}
                                    className="form-control" name="apellido" id="" aria-describedby="helpId" placeholder="Apellido(s)"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Fecha de Nacimiento:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="date" value={cliente.fecha_nacimiento} onChange={capturarDatos}
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
                                <input type="text" value={cliente.direccion} onChange={capturarDatos}
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
                                <input type="text" value={cliente.telefono} onChange={capturarDatos}
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
                                <input type="text" value={cliente.email} onChange={capturarDatos}
                                    className="form-control" name="email" id="" aria-describedby="helpId" placeholder="Email"/>
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
                                    <select name="id_ciudad" onChange={capturarDatos}>
                                        <option>Seleccionar</option>
                                        {
                                            datos.map((ciudades)=>(
                                                (cliente.nombre==ciudades.nombre)?
                                                (<option key={ciudades.id_ciudad} selected value={ciudades.id_ciudad}>{ciudades.nombre}</option>):
                                                (<option key={ciudades.id_ciudad} value={ciudades.id_ciudad}>{ciudades.nombre}</option>) 
                                            ))
                                        }
                                    </select> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="">
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