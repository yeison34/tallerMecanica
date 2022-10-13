import { Link } from "react-router-dom";

const Nav=()=>{
    return (
        <>
            <nav className="nav bg-dark float-left">
              <Link className="nav-link active hiper" to="/gestionar" aria-current="page">Clientes</Link>
              <Link className="nav-link active hiper" to="automoviles" aria-current="page">Automoviles</Link>
              <Link className="nav-link active hiper" to="reportes" aria-current="page">Reportes</Link>
              <Link className="nav-link active hiper" to="registroIngreso" aria-current="page">Ingresos</Link>
              <div className="">
              </div>
            </nav>
        </>
    );
}

export default Nav