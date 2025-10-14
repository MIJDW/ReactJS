import useProductos from './Personalizados/useProductos';
import CartaSimple from './Elementos/CartaSimple';
import Main from './Semantico/Main'
const Inicio = ({agregarCarrito, eliminarCarrito}) => {
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