import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
const Tabla=()=>{
    const[datos,setDatos]=useState([]);
    const[recargar,setRecargar]=useState(false);

    const cargarDatos=()=>{
        fetch("http://localhost/taller/empleados/?consultar")
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

    useEffect(()=>{
        cargarDatos()
    },[recargar]);

    return(
                <div className="tabla-gestionar">
                    <div className='titulos'>
                        <h3>Listado de Empleados</h3>
                    </div>
                    <div className='tabla-gestionar-tamano'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Cedula</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Fecha de Nacimiento</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Ciudad</th>
                                    <th scope="col">Fecha Ingreso</th>
                                    <th scope="col">Especialidad</th>
                                    <th scope="col">Sueldo</th>
                                    <th scope="col"><Link to="insertEmp"><button className="btn btn-success">Registrar</button></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos.map(empleados=>(
                                        <tr className="" key={empleados.id_empleado}>
                                            <td>{empleados.cedula}</td>
                                            <td>{empleados.nombres}</td>
                                            <td>{empleados.apellidos}</td>
                                            <td>{empleados.direccion}</td>
                                            <td>{empleados.fecha_nacimiento}</td>
                                            <td>{empleados.telefono}</td>
                                            <td>{empleados.nombre}</td>
                                            <td>{empleados.fecha_ingreso}</td>
                                            <td>{empleados.especialidad}</td>
                                            <td>{empleados.sueldo}</td>
                                            <td><Link to={`editar/${empleados.id_empleado}`}><button className="btn btn-primary botones-gestion">Editar</button></Link><button className="btn btn-danger" onClick={()=>eliminar(empleados.id_empleado)}>Eliminar</button></td>
                                        </tr>
                                    ))

                                }
                            </tbody>
                        </table>
                    </div>    
            </div>
    )
}
export default Tabla