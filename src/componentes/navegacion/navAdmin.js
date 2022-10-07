import { Link } from "react-router-dom";

const Nav=()=>{
    return (
        <>
            <nav class="nav justify-content-center  ">
              <Link class="nav-link active" to="/logeo" aria-current="page">Listar</Link>
            </nav>
        </>
    );
}

export default Nav