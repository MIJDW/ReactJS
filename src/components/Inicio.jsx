import useProductos from './Personalizados/useProductos';
import CartaSimple from './Elementos/CartaSimple';
import Main from './Semantico/Main'
import { useContext } from 'react';
import { CarritoContext } from './Contexto/CarritoContext';
const Inicio = () => {
    const {agregarCarrito, eliminarCarrito} = useContext(CarritoContext);
    return (
        <Main 
        useHook={useProductos} 
        Carta={CartaSimple} 
        agregarCarrito={agregarCarrito} 
        eliminarCarrito={eliminarCarrito} 
        mostrarAgregar={true} 
        mostrarEliminar={false}/>
    )
}
export default Inicio;