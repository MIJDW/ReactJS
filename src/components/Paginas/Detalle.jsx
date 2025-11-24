import { useProductosContext } from "../Contexto/ProductoContext";
import Main from "../Semantico/Main";

const Detalle = () => {
    return (
        <Main 
        useHook={useProductosContext} 
        detailed={true}
        mostrarAgregar={true} 
        mostrarEliminar={false}/>
    )
}
export default Detalle;