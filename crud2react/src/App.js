import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import Criar from './Criar';
import Ler from './Ler';
import Editar from './Editar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/criar' element={<Criar/>}></Route>
        <Route path='/ler/:id' element={<Ler />}></Route>
        <Route path='/editar/:id' element={<Editar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
