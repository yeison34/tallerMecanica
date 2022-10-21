import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Tabla=()=>{
    const[categoria,setCategoria]=useState([]);
    const[datos,setDatos]=useState([]);
    let navigate=useNavigate();
    const campos={
        codigo:"",
        nombre:"",
        id_categoria_producto:"",
        precio_compra:"",
        precio_venta:"",
        fecha:"",
        id_stock:""
    }

    const enviar=(e)=>{
        e.preventDefault();
        fetch("http://localhost/taller/productos/?insertar",{
            method:"POST",
            body:JSON.stringify(campos)
        })
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            alert("El Producto Se Ha Registrado Exitosamente");
            console.log(respuesta);
            navigate("/gestionar/productos");
        })
        .catch(console.log)
        console.log(campos);
    }

    const cargarCategorias=()=>{
        fetch("http://localhost/taller/productos/?consultar")
        .then(datosRespuesta=>datosRespuesta.json())
        .then(respuesta=>{
            setCategoria(respuesta);
            console.log(respuesta);
        })
        .catch(console.log)
    }

    const capturarValores=(e)=>{
        campos[e.target.name]=e.target.value;
        //console.log(campos);
    }

    useEffect(()=>{
        cargarCategorias()
    },[])
    return(
        <>
            <div className="contenedor contenedor-ingresos">
            <div className="padines">
                        <center><h3>Editar de Productos</h3></center>
                    </div>
                <div className="tamano-productos container">
                    <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-5">
                                        <label htmlFor="" className="form-label">Codigo:</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="text" onChange={capturarValores}
                                            className="form-control" name="codigo" id="" aria-describedby="helpId" placeholder="Codigo Producto"/>
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
                                        <label htmlFor="" className="form-label">Nombre Producto:</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="text" onChange={capturarValores}
                                            className="form-control" name="nombre" id="" aria-describedby="helpId" placeholder="Nombre Producto"/>
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
                                        <label htmlFor="" className="form-label">Categoria:</label>
                                    </div>
                                    <div className="col-7">
                                        <select name="id_categoria_producto" onChange={capturarValores}>
                                            <option>Seleccionar</option>
                                            {
                                                categoria.map((categoria)=>(
                                                    <option key={categoria.id_categoria_producto} value={categoria.id_categoria_producto}>{categoria.nombre}</option>
                                                ))

                                            }
                                        </select>
                                    </div>
                                </div>
                        </div>
                </div>

                {/*segunda fila*/}
                <div className="row">
                    <div className="col-4">
                            <div className="row">
                                <div className="col-5">
                                    <label htmlFor="" className="form-label">Precio Compra:</label>
                                </div>
                                <div className="col-7">
                                    <div className="row">  
                                        <input type="text" onChange={capturarValores}
                                        className="form-control" name="precio_compra" id="" aria-describedby="helpId" placeholder="Precio Compra"/>
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
                                    <label htmlFor="" className="form-label">Precio Venta:</label>
                                </div>
                                <div className="col-7">
                                    <div className="row">  
                                        <input type="text" onChange={capturarValores}
                                        className="form-control" name="precio_venta" id="" aria-describedby="helpId" placeholder="Precio Venta"/>
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
                                        <label htmlFor="" className="form-label">Fecha:</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="date" onChange={capturarValores}
                                            className="form-control" name="fecha" id="" aria-describedby="helpId" placeholder="Descripción"/>
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
                                        <label htmlFor="" className="form-label">Stock:</label>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">  
                                            <input type="text" onChange={capturarValores}
                                            className="form-control" name="id_stock" id="" aria-describedby="helpId" placeholder="Stock"/>
                                        </div>
                                        <div className="row">
                                            <small id="helpId" className="form-text text-muted">Help text</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="boton-registrar-pr">
                            <button className="btn btn-success" onClick={enviar}>Registrar</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>                  
                                
        </>
    )
}

export default Tabla