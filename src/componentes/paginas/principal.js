import Header from './../piesdepagina/Header'
import Login from './../login/login'
import Footer from './../piesdepagina/Footer'
const Principal=()=>{
    return(
        <>
            <div className='Header'>
                <Header></Header>
            </div>    
            <div className='contenedor-login'>
                <Login></Login>
            </div>
            <div className='Footer'>
                <Footer></Footer>
            </div>    
        </>
    )
}

export default Principal