const Tabla=()=>{
    return(
        <>
            <div className="container contenedor-ingresos">
                    <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="" className="form-label">Nombre Cliente</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="text"
                                            className="form-control" name="" id="" aria-describedby="helpId" placeholder="Nombre Cliente"/>
                                        </div>
                                        <div className="row">
                                            <small id="helpId" className="form-text text-muted">Help text</small>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                            <div className="col-4">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="" className="form-label">Placa Vehiculo</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="text"
                                            className="form-control" name="" id="" aria-describedby="helpId" placeholder="Placa Vehiculo"/>
                                        </div>
                                        <div className="row">
                                            <small id="helpId" className="form-text text-muted">Help text</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                        <div className="col-4">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="" className="form-label">Empleado/Trabaja</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="text"
                                            className="form-control" name="" id="" aria-describedby="helpId" placeholder="Empleado Encargado"/>
                                        </div>
                                        <div className="row">
                                            <small id="helpId" className="form-text text-muted">Help text</small>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>

                {/*segunda fila*/}
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="" className="form-label">Tipo de Trabajo</label>
                            </div>
                            <div className="col-7">
                                <div className="row">  
                                        <select>
                                            <option>Select</option>
                                            <option>Mantenimiento</option>
                                            <option>Reparacion</option>
                                        </select>
                                </div>
                                <div className="row">
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="" className="form-label">Fecha Ingreso</label>
                                </div>
                                <div className="col-7">
                                    <div className="row">  
                                        <input type="date"
                                        className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                                    </div>
                                    <div className="row">
                                        <small id="helpId" className="form-text text-muted">Help text</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    <div className="col-4">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="" className="form-label">Fecha Entrega</label>
                                </div>
                                <div className="col-7">
                                    <div className="row">  
                                        <input type="date"
                                        className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                                    </div>
                                    <div className="row">
                                        <small id="helpId" className="form-text text-muted">Help text</small>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                {/*tercera fila*/}

                <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="" className="form-label">Descripción</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="text"
                                            className="form-control" name="" id="" aria-describedby="helpId" placeholder="Descripción"/>
                                        </div>
                                        <div className="row">
                                            <small id="helpId" className="form-text text-muted">Help text</small>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                            <div className="col-4">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="" className="form-label">Observación</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="text"
                                            className="form-control" name="" id="" aria-describedby="helpId" placeholder="Observación"/>
                                        </div>
                                        <div className="row">
                                            <small id="helpId" className="form-text text-muted">Help text</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                        <div className="col-4">
                                <div className="row">
                                    <div className="col-6">
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-success">Registrar Ingreso</button>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Tabla