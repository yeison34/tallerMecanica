import { Link } from "react-router-dom";

const Nav=()=>{
    return (
        <>
            <nav class="nav bg-dark float-left">
              <Link class="nav-link active hiper" to="/gestionar" aria-current="page">Clientes</Link>
              <Link class="nav-link active hiper" to="automoviles" aria-current="page">Automoviles</Link>
              <Link class="nav-link active hiper" to="reportes" aria-current="page">Reportes</Link>
              <Link class="nav-link active hiper" to="registroIngreso" aria-current="page">Ingresos</Link>
              <div className="">
              </div>
            </nav>
        </>
    );
}

export default Nav