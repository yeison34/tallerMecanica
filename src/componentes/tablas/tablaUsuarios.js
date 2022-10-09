import {Link} from 'react-router-dom'
const Tabla=()=>{
    return(
                <div className="tabla-gestionar">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Cedula</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Fecha Nto</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Ciudad</th>
                                    <th scope="col"><Link to="insertuser"><button className="btn btn-success">Registrar</button></Link></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td>1</td>
                                    <td>123456789</td>
                                    <td>Pedro</td>
                                    <td>Perez</td>
                                    <td>Mz z Casa 32</td>
                                    <td>1989-02-10</td>
                                    <td>31355555559</td>
                                    <td>PASTO</td>
                                    <td><button className="btn btn-primary botones-gestion">Editar</button><button className="btn btn-danger">Eliminar</button></td>
                                </tr>
                                
                            </tbody>
                        </table>
            </div>
    )
}
export default Tabla