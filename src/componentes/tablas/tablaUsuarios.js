import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import DataTable from 'react-data-table-component';
const Tabla=()=>{
    const [datos,setDatos]=useState([]);
    const [recargar,setRecargar]=useState(false);
    let navigate=useNavigate();

    function eliminar(id){
        var opcion=window.confirm("Esta Seguro de Eliminar Al Usuario");
        if(opcion){
            fetch("http://localhost/taller/usuarios/?eliminar="+id)
            .then(datosRespuesta=>datosRespuesta.json())
            .then(respuesta=>{
                console.log(respuesta);
                setRecargar(!recargar);
            })
            .catch(console.log)
        }else{
            setRecargar(!recargar);
        }
    }


    const cargarDatos=()=>{
        fetch("http://localhost/taller/usuarios/?consultar")
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            if(respuesta){
                setDatos(respuesta);
            }else{
                console.log("no hay refgistros");
            }
        })
        .catch(console.log)
    }

    useEffect(()=>{
        cargarDatos()
    },[recargar]);

    return(
                <div className="tabla-gestionar">
                    <div className='titulos'>
                        <h3>Listado de Usuarios</h3>
                    </div>
                    <div className='tabla-gestionar-tamano'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Cedula</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Fecha de Nacimiento</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Ciudad</th>
                                    <th scope="col"><Link to="insertuser"><button className="btn btn-success">Registrar</button></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos.map(usuarios=>(
                                    <tr class="" key={usuarios.id_usuario}>
                                        <td>{usuarios.cedula}</td>
                                        <td>{usuarios.nombres}</td>
                                        <td>{usuarios.apellidos}</td>
                                        <td>{usuarios.direccion}</td>
                                        <td>{usuarios.fecha_nacimiento}</td>
                                        <td>{usuarios.telefono}</td>
                                        <td>{usuarios.nombre}</td>
                                        <td><Link to={`editar/${usuarios.id_usuario}`}><button className="btn btn-primary botones-gestion">Editar</button></Link><button className="btn btn-danger" onClick={()=>eliminar(usuarios.id_usuario)}>Eliminar</button></td>
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