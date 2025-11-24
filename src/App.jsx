import Container from 'react-bootstrap/Container';
import Header from './components/Semantico/Header'
import Footer from './components/Semantico/Footer'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Detalle from './components/Detalle';
import Carrito from './components/Carrito';
import Login from './components/Login';
import Admin from './components/Admin';
import RutaProtegidaAdmin from './components/Rutas/RutaProtegidaAdmin';
import RutaProtegidaGeneral from './components/Rutas/RutaProtegidaGeneral';
function App() {
  return (
    <Container fluid className="p-0 app-container">
      <Header/> 
        <Routes>
          <Route 
          path={'/'} 
          element={<Inicio/>}/>

          <Route 
          path={'/detalle/:id'} 
          element={<Detalle/>}/>

          <Route 
          path={'/carrito'} 
          element={<RutaProtegidaGeneral>
            <Carrito/>
          </RutaProtegidaGeneral>}/>

          <Route path={'/admin'}
          element={<RutaProtegidaAdmin>
              <Admin/>
          </RutaProtegidaAdmin>}/>

          <Route path={'/login'}
          element={<Login/>}/>
        </Routes>
      <Footer />
    </Container>
  )
}
export default App;