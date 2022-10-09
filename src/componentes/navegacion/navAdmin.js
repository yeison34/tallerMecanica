import { Link } from "react-router-dom";

const Nav=()=>{
    return (
        <>
            <nav class="nav bg-dark float-left">
              <Link class="nav-link active hiper" to="/logeo" aria-current="page">Usuarios</Link>
              <Link class="nav-link active hiper" to="empleados" aria-current="page">Empleados</Link>
              <div className="">
                
              </div>
            </nav>
        </>
    );
}

export default Nav