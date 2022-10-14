import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FormControl, FormLabel, FormSelect } from 'react-bootstrap';
import Vehiculos from './../modal/modal';
const Tabla=()=>{
    const[datos,setDatos]=useState([]);
    const[recargar,setRecargar]=useState(false);
    const[isOpen,setOpen]=useState(false);
    const[id,setId]=useState('');
    const[vehiculos,setVehiculos]=useState([]);
    const campos={
        placa:"",
        modelo:"",
        marca:"",
        color:"",
        ciudad:"",
        tipo:""
    }

    const cargarDatos=()=>{
        fetch("http://localhost/taller/clientes/?consultar")
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            console.log(respuesta);
            if(respuesta){
                setDatos(respuesta);
            }else{
                console.log("no hay refgistros");
            }
        })
        .catch(console.log)
    }

    function eliminar(id){
        var opcion=window.confirm("Esta Seguro de Eliminar Al Usuario");
        if(opcion){
            fetch("http://localhost/taller/empleados/?eliminar="+id)
            .then(datosRespuesta=>datosRespuesta.json())
            .then(respuesta=>{
                //console.log(respuesta);
                setRecargar(!recargar);
            })
            .catch(console.log)
        }else{
            setRecargar(!recargar);
        }
    }

    const capturarDatos=(e)=>{
        campos[e.targe.name]=e.target.value;
        console.log(campos);
    }

    useEffect(()=>{
        cargarDatos()
    },[recargar]);
    return(
            <>
            <Vehiculos activar={isOpen} cambiar={setOpen} id={id} modificar={setId}></Vehiculos>
                <div className="tabla-gestionar">
                    <div className='titulos'>
                        <h3>Listado de Clientes</h3>
                    </div>
                    <div className='tabla-gestionar-tamano'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Cedula</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Fecha de Nacimiento</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Ciudad</th>
                                    <th scope="col">Vehiculos</th>
                                    <th scope="col"><Link to="insertCli"><button className="btn btn-success">Registrar</button></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos.map((clientes)=>(
                                        <tr class="">
                                            <td>{clientes.cedula}</td>
                                            <td>{clientes.nombres}</td>
                                            <td>{clientes.apellido}</td>
                                            <td>{clientes.fecha_nacimiento}</td>
                                            <td>{clientes.direccion}</td>
                                            <td>{clientes.telefono}</td>
                                            <td>{clientes.email}</td>
                                            <td>{clientes.nombre}</td>
                                            <td><button className='btn btn-success' onClick={()=>{setOpen(!isOpen);setId(clientes.cedula)}}>Ver</button></td>
                                            <td><Link to={`automoviles/${clientes.cedula}`}><button className='btn btn-outline-secondary'>Mas</button></Link><button className="btn btn-primary botones-gestion">Editar</button><button className="btn btn-danger">Eliminar</button></td>
                                        </tr>
                                    ))
                                }
                                                                
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    )
}
export default Tabla