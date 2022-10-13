import {Link} from 'react-router-dom'
const Tabla=()=>{
    return(
                <div className="tabla-gestionar">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Placa</th>
                                    <th scope="col">Tipo de Vehiculo</th>
                                    <th scope="col">Modelo</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Observacion</th>
                                    <th scope="col"><Link to="insertuser"><button className="btn btn-success">Registrar</button></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td>AAA-333</td>
                                    <td>Camion</td>
                                    <td>2019</td>
                                    <td>Rojo</td>
                                    <td>Spark</td>
                                    <td>Ninguna</td>
                                    <td><button className="btn btn-primary botones-gestion">Editar</button><button className="btn btn-danger">Eliminar</button></td>
                                </tr>
                            </tbody>
                        </table>
            </div>
    )
}
export default Tabla