import { Container, Row, Col } from 'react-bootstrap';
const Gallery = ({useHook, productos : productosDirectos, Carta, agregarCarrito, eliminarCarrito, mostrarAgregar, mostrarEliminar})=> {  

    const { productos: productosHook = [], cargando, error } = useHook ? useHook() : { productos: [] };
    const items = productosDirectos || (Array.isArray(productosHook) ? productosHook : [productosHook]);

    if (useHook && cargando)
        return <h1 className="text-center my-4">Cargando...</h1>;

    if (useHook && error)
        return <h1 className="text-center text-danger my-4">{error}</h1>;

    if (!items || items.length === 0)
        return <h1 className="text-center my-4">No hay productos para mostrar.</h1>;


    return (  
        <Container className="my-4">
            <Row className="g-2 justify-content-center">
                {items.map((product, index) => (
                    <Col key={index} xs="auto">
                        <Carta product={product} 
                        agregarCarrito={agregarCarrito} 
                        eliminarCarrito={eliminarCarrito} 
                        mostrarAgregar={mostrarAgregar} 
                        mostrarEliminar={mostrarEliminar}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );  
}  
export default Gallery;