import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route, Navigate,useRoutes} from 'react-router-dom';
import Principall from './componentes/paginas/principal';
import Inicio from './componentes/gestionar/gestionarUsuario'
import Tabla from './componentes/tablas/gestionarUsuario'
function App() {
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Principall />} />
          <Route path="/logeo" element={<Tabla />} />
        </Routes>
    </Router>
  )
}

export default App;
