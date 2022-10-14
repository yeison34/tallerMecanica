import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Insertar=()=>{
    let navigate=useNavigate();
    let id=useParams();
    let codigo=id['id'];
    console.log(id);
    const url="http://localhost/taller/clientes/?especialidades";
    const urlInsert="http://localhost/taller/clientes/?vehiculo";
    const urlCiudades="http://localhost/taller/ciudades/?consultar";

    const[datos,setDatos]=useState([]);
    const[ciudad,setCiudad]=useState([]);
    const[vehiculos,setVehiculos]=useState([]);

    const campos={
        id:codigo,
        placa:"",
        modelo:"",
        marca:"",
        color:"",
        id_ciudad:"",
        id_tipo:""
    }

    const cargarCiudades=()=>{
        fetch(urlCiudades)
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            //console.log(respuesta);
            setCiudad(respuesta);
        })
        .then(console.log)
    }

    const cargarVehiculos=()=>{
        fetch("http://localhost/taller/vehiculos/?consultar")
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            console.log(respuesta);
            if(respuesta){
                setVehiculos(respuesta);
            }else{
                console.log("no hay refgistros");
            }
        })
        .catch(console.log)
    }

    const capturarDatos=(e)=>{
        campos[e.target.name]=e.target.value;
        console.log(campos);
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
            navigate("/gestionar");
        })
        .catch(console.log)
    }

    useEffect(()=>{
        cargarCiudades()
        cargarVehiculos()
    },[]);

    return(
        <>          
            <div className="contenedor">
                <div className="p-4">
                    <h3>Registro de Automoviles</h3>
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
                                  <label htmlFor="" className="form-label">*Placa:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="placa" id="" aria-describedby="helpId" placeholder="Placa"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Modelo:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="modelo" id="" aria-describedby="helpId" placeholder="Modelo"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Marca:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="marca" id="" aria-describedby="helpId" placeholder="Marca"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Color:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text" onChange={capturarDatos}
                                    className="form-control" name="color" id="" aria-describedby="helpId" placeholder="Color"/>
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
                                            ciudad.map((ciudades)=>(
                                                <option key={ciudades.id_ciudad} value={ciudades.id_ciudad}>{ciudades.nombre}</option>
                                            ))
                                        }
                                    </select> 
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label htmlFor="" className="form-label">*Tipo de Vehiculo:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <select name="id_tipo" onChange={capturarDatos}>
                                        <option>Seleccionar</option>
                                        {
                                            vehiculos.map((vehiculo)=>(
                                                <option key={vehiculo.id_tipo} value={vehiculo.id_tipo}>{vehiculo.nombre}</option>
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