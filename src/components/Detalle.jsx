import Main from "./Semantico/Main";
import CartaDetallada from './Elementos/CartaDetallada';
import useDetalleProducto from "./Personalizados/useDetalleProducto";
import { useContext } from "react";
import { CarritoContext } from "./Contexto/CarritoContext";
const Detalle = () => {
    const {agregarCarrito, eliminarCarrito} = useContext(CarritoContext);
    return (
        <Main 
        useHook={useDetalleProducto} 
        Carta={CartaDetallada} 
        agregarCarrito={agregarCarrito} 
        eliminarCarrito={eliminarCarrito} 
        mostrarAgregar={true} 
        mostrarEliminar={false}/>
    )
}
export default Detalle;