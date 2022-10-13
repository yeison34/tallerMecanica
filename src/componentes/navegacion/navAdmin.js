import { Link } from "react-router-dom";

const Nav=()=>{
    return (
        <>
            <nav className="nav bg-dark float-left">
              <Link className="nav-link active hiper" to="/logeo" aria-current="page">Usuarios</Link>
              <Link className="nav-link active hiper" to="empleados" aria-current="page">Empleados</Link>
              <div className="">
                
              </div>
            </nav>
        </>
    );
}

export default Nav