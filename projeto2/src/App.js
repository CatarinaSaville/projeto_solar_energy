import './App.css';
import { Routes, Route, setPath, BrowserRouter, Switch } from 'react-router-dom';
import { useState } from 'react';

//pages
import Logon from './pages/Login';
import Dashboard from './pages/Dashboard'
import ListaUnidades from './pages/Unidades/lista';
import Cadastro from './pages/Unidades/cadastro';
import GeracaoMensal from './pages/ConsumoMensal';

export default function App() {
  //condicao se nao estiver no login, mostra o Menu
  const [path, setPath] = useState(window.location.pathname);


  return (
    <>
      {/* <BrowserRouter>
        <Switch> */}


          <Routes>
            <Route path="/" element={<Logon  />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/unidade/lista" element={<ListaUnidades  />} />
            <Route path="/unidade/cadastro" element={<Cadastro />} />
            <Route path="/unidade/cadastro/:id" element={<Cadastro />} />
            <Route path="/consumoMensal" element={<GeracaoMensal  />} />
          </Routes>
        {/* </Switch> */}
      {/* </BrowserRouter> */}
    </>
  );
}