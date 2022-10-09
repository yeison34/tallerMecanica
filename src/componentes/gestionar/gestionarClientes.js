import Nav from './../navegacion/navUsuario'
import Tabla from '../tablas/tablaUsuarios'
import { Outlet } from 'react-router-dom'
import Footer from './../piesdepagina/Footer'
const Gestionar=()=>{
    return(
        <>
            <div className='Header'>
                <Nav></Nav>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <div className='Footer'>
                <Footer></Footer>
            </div>
            
        </>
    )
}

export default Gestionar