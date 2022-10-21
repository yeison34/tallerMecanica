const Reporte =()=>{
    return(
    <>
        <div class="container contenedor contenedor-ingresos">
            <div class="row">
                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Numero Factura</label>
                    <input type="text"
                        class="form-control" name="factura" id="" aria-describedby="helpId" placeholder="Numero"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Nombre Cajero</label>
                    <input type="text"
                        class="form-control" name="cajero" id="" aria-describedby="helpId" placeholder="Nombre"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Fecha</label>
                    <input type="text"
                        class="form-control" name="fecha" id="" aria-describedby="helpId" placeholder="Fecha"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>
             </div>

             <div class="row">
                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Nombre de cliente</label>
                    <input type="text"
                        class="form-control" name="nombre_cli" id="" aria-describedby="helpId" placeholder="Nombre"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Tipo de Vehiculo</label>
                    <input type="text"
                        class="form-control" name="tipo_veh" id="" aria-describedby="helpId" placeholder="Tipo"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Placa del Vehiculo</label>
                    <input type="text"
                        class="form-control" name="placa_veh" id="" aria-describedby="helpId" placeholder="Placa"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>
             </div>
             <div class="row">
                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Nombre Empleado</label>
                    <input type="text"
                        class="form-control" name="nombre_emp" id="" aria-describedby="helpId" placeholder="Nombre"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Tipo de Trabajo</label>
                    <input type="text"
                        class="form-control" name="tipo_tra" id="" aria-describedby="helpId" placeholder="Tipo"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Descripcion Trabajo</label>
                    <input type="text"
                        class="form-control" name="desc_tra" id="" aria-describedby="helpId" placeholder="Descripcion"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>
             </div>
             <div class="row">
                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Items Productos</label>
                    <input type="text"
                        class="form-control" name="items" id="" aria-describedby="helpId" placeholder="Items"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Forma de Pago</label>
                    <input type="text"
                        class="form-control" name="forma_pg" id="" aria-describedby="helpId" placeholder="Forma"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Observacion</label>
                    <input type="text"
                        class="form-control" name="obs" id="" aria-describedby="helpId" placeholder="Observacion"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>
             </div>
             <div class="row">
                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Total a pagar</label>
                    <input type="text"
                        class="form-control" name="total_pg" id="" aria-describedby="helpId" placeholder="Total"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="">
                    <label for="" class="form-label">Descuento</label>
                    <input type="text"
                        class="form-control" name="descuento" id="" aria-describedby="helpId" placeholder="Descuento"/>
                    <small id="helpId" class="form-text text-muted">Help text</small>
                    </div>
                </div>

                <div class="col-4 centrar">
                    <div class="">
                    <a name="" id="" class="btn btn-primary" href="#" role="button">Facturar</a>
                    </div>
                </div>
             </div>
       </div>
    </>
    )
}
export default Reporte