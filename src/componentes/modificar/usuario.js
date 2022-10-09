const Modificar=()=>{
    return(
        <>  
            <div className="margenes">
                 <h4>JUAN PEDRITO PEREZ</h4>
            </div>
            <div className="margenes">
                <h5>General</h5>
            </div>  
            <div className="contenedor-campos-foto margenes">  
                <div className="registrar-tamano">  
                    <form>
                        <ul>
                            <li className="label-input"> 
                                <small><label for="" className="form-label">Cedula</label></small>
                                <input type="text"
                                className="inputs" name="" id="" aria-describedby="helpId" placeholder="Cedula"/>
                            </li>
                            <li className="label-input">
                                <small><label for="" className="form-label">Nombre</label></small>
                                <input type="text"
                                className="inputs" name="" id="" aria-describedby="helpId" placeholder="Nombre"/>
                            </li>
                            <li className="label-input">
                                <small><label for="" className="form-label">Apellido(s)</label></small>
                                <input type="text"
                                className="inputs" name="" id="" aria-describedby="helpId" placeholder="Apellido"/>
                            </li>
                            <li className="label-input">
                                <small><label for="" className="form-label">Fecha Nto</label></small>
                                <input type="text"
                                className="inputs" name="" id="" aria-describedby="helpId" placeholder="Fecha de Nacimiento"/>
                            </li>
                            <li className="label-input">
                                <small><label for="" className="form-label">Dirección</label></small>
                                <input type="text"
                                className="inputs" name="" id="" aria-describedby="helpId" placeholder="Dirección"/>
                            </li>
                                <li className="label-input">
                                <small><label for="" className="form-label">Telefono</label></small>
                                <input type="text"
                                className="inputs" name="" id="" aria-describedby="helpId" placeholder="Telefono"/>
                            </li>
                            <li className="label-input">
                                <small><label for="" className="form-label">Ciudad</label></small>
                                <input type="text"
                                className="inputs" name="" id="" aria-describedby="helpId" placeholder="Ciudad"/>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="seccion-foto">
                    foto
                </div>
            </div>
         </>
    )
}

export default Modificar