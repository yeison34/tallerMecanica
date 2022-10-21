import { useEffect, useState } from "react"
import { Button, Modal, ModalBody } from "react-bootstrap"
import { Link } from "react-router-dom"


const Mostrar=(props)=>{
    const[vehiculos,setVehiculos]=useState([]);
    const id=props.id;
    console.log(id);
        const cargarVehiculos=()=>{
            fetch("http://localhost/taller/vehiculos/?vehiculos="+id)
            .then(datosRespuesta=>datosRespuesta.json())
            .then(respuesta=>{
                console.log(respuesta);
                if(respuesta){
                    setVehiculos(respuesta);
                }else{
                    console.log("no hay registros");
                }
                
            })
            .catch(console.log)
        }

    useEffect(()=>{
        cargarVehiculos()
    },[props.activar]);
    return(
        <Modal show={props.activar} onHide={!props.activar} size="lg">
            <Modal.Header>
                Vehiculos Registrados
            </Modal.Header>
            <ModalBody>
            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Placa</th>
                                    <th scope="col">Tipo de Vehiculo</th>
                                    <th scope="col">Modelo</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Ciudad</th>
                                    <th scope="col">Observacion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehiculos.map((vehiculo)=>(
                                    <tr className="" key={vehiculo.placa}>
                                        <td>{vehiculo.placa}</td>
                                        <td>{vehiculo.nombre}</td>
                                        <td>{vehiculo.modelo}</td>
                                        <td>{vehiculo.color}</td>
                                        <td>{vehiculo.marca}</td>
                                        <td>{vehiculo.nom}</td>
                                        <td></td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
            </ModalBody>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.cambiar(!props.activar)}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Mostrar