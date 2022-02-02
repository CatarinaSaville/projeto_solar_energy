import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import ListaUnidades from './pages/Unidades/lista';
import Cadastro from './pages/Unidades/cadastro';
import GeracaoMensal from './pages/ConsumoMensal';

export default function App() {
 
  return (
    <>
      {/* <BrowserRouter>
        <Switch> */}


          <Routes>
            <Route path="/" element={<Login  />} />
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