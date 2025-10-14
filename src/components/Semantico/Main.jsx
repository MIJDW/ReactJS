import Gallery from "../Elementos/Gallery";
const Main = ({useHook, productos, Carta, agregarCarrito, eliminarCarrito, mostrarAgregar, mostrarEliminar})=> {  
    return (  
        <main>  
            <Gallery 
            useHook={useHook}
            productos={productos}
            Carta={Carta}
            agregarCarrito={agregarCarrito} 
            eliminarCarrito={eliminarCarrito}
            mostrarAgregar={mostrarAgregar}
            mostrarEliminar={mostrarEliminar}/>
        </main>  
    );  
}  
export default Main;  