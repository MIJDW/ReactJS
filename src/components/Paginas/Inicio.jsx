import { useProductosContext } from '../Contexto/ProductoContext';
import Main from '../Semantico/Main'

const Inicio = () => {
        return (
        <Main 
        useHook={useProductosContext} 
        mostrarAgregar={true} 
        mostrarEliminar={false}/>
    )
}
export default Inicio;