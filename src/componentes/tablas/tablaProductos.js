import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
const Tabla=()=>{
    const[datos,setDatos]=useState([]);
    const[recargar,setRecargar]=useState(false);

    const cargarDatos=()=>{
        fetch("http://localhost/taller/productos/?productos")
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            console.log(respuesta);
            if(respuesta){
                setDatos(respuesta);
            }else{
                console.log("no hay registros");
            }
        })
        .catch(console.log)
    }

    function eliminar(id){
        console.log(id);
        var opcion=window.confirm("Esta Seguro de Eliminar Al Usuario");
        if(opcion){
            fetch("http://localhost/taller/productos/?eliminar="+id)
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

    useEffect(()=>{
        cargarDatos()
    },[recargar]);

    return(
                <div className="tabla-gestionar">
                    <div className='titulos'>
                        <h3>Listado de Productos</h3>
                    </div>
                    <div className='tabla-gestionar-tamano'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Codigo</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Existencias</th>
                                    <th scope="col">Precio Compra</th>
                                    <th scope="col">Precio Venta</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col"><Link to="registrarProductos"><button className="btn btn-success">Registrar</button></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datos.map(productos=>(
                                        <tr className="" key={productos.id_producto}>
                                            <td>{productos.codigo}</td>
                                            <td>{productos.nombres}</td>
                                            <td>{productos.nombre}</td>
                                            <td>{productos.cantidad}</td>
                                            <td>{productos.precio_compra}</td>
                                            <td>{productos.precio_venta}</td>
                                            <td>{productos.fecha}</td>
                                            <td><Link to={`editar/${productos.codigo}`}><button className="btn btn-primary botones-gestion">Editar</button></Link><button className="btn btn-danger" onClick={()=>eliminar(productos.codigo)}>Eliminar</button></td>
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