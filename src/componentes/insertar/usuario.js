const Insertar=()=>{
    return(
        <>          
            <div className="contenedor">
                <div className="p-4">
                    <h3>Registro de Clientes</h3>
                </div>
                <div className="p-4">
                    <h5>General</h5>
                    <hr></hr>
                </div>
                <div className="container">
                    <div className="centrar">
                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Cedula:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Cedula"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Nombre:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Nombre"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Apellido(s):</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Apellido(s)"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Fecha  de Nacimiento:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="date"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Dirección:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Dirección"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Telefono:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Telefono"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Ciudad:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Ciudad"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h5>Campos Registro Usuario y Contraseña</h5>
                    <hr></hr>
                </div>
                <div className="container">
                    <div className="centrar">
                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Usuario:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Usuario"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-5 texto">
                                  <label for="" class="form-label">*Contraseña:</label>
                            </div>
                            <div className="col-7">
                                <div className="row">
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" placeholder="Contraseña"/>
                                </div>
                                <div className="row"> 
                                    <small id="helpId" class="form-text text-muted">Help text</small>
                                </div>    
                            </div>
                        </div>

                        <div className="row boton">
                            <button className="btn btn-success">Registrar</button>
                        </div>
                    </div>
                </div>        
            </div>
        </>
    )
}

export default Insertar