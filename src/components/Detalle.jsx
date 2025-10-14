import Main from "./Semantico/Main";
import CartaDetallada from './Elementos/CartaDetallada';
import useDetalleProducto from "./Personalizados/useDetalleProducto";
const Detalle = ({agregarCarrito, eliminarCarrito}) => {
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