import Container from 'react-bootstrap/Container';
import Header from './components/Semantico/Header'
import Footer from './components/Semantico/Footer'
import './App.css';
import useCarrito from './components/Personalizados/useCarrito';
import { Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Detalle from './components/Detalle';
import Carrito from './components/Carrito';
function App() {
  const { carrito, agregarCarrito, eliminarCarrito, limpiarCarrito, total } = useCarrito();
  return (
    <Container fluid className="p-0 app-container">
      <Header total={total} carrito={carrito}/>
        <Routes>

          <Route 
          path={'/'} 
          element={<Inicio 
          agregarCarrito={agregarCarrito} 
          eliminarCarrito={eliminarCarrito}/>}/>

          <Route 
          path={'/detalle/:id'} 
          element={<Detalle 
          agregarCarrito={agregarCarrito} 
          eliminarCarrito={eliminarCarrito}/>}/>

          <Route 
          path={'/carrito'} 
          element={<Carrito 
          carrito={carrito} 
          eliminarCarrito={eliminarCarrito} 
          limpiarCarrito={limpiarCarrito} 
          total={total}/>}/>
          
        </Routes>
      <Footer />
    </Container>
  )
}
export default App;