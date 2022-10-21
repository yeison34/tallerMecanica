import { Link } from "react-router-dom";

const Nav=()=>{
    return (
        <>
            <nav className="nav bg-dark float-left">
              <Link className="nav-link active hiper" to="/gestionar" aria-current="page">Clientes</Link>
              <Link className="nav-link active hiper" to="reportes" aria-current="page">Reportes</Link>
              <Link className="nav-link active hiper" to="registroIngreso" aria-current="page">Ingresos</Link>
              <Link className="nav-link active hiper" to="productos" aria-current="page">Productos</Link>
              <Link className="nav-link active hiper" to="factura" aria-current="page">Factura</Link>
              <div className="">
              </div>
            </nav>
        </>
    );
}

export default Nav