import { Container, Row, Col } from 'react-bootstrap';
import CartaProducto from './CartaProducto';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Gallery = ({ useHook, productos: productosDirectos, detailed, mostrarAgregar, mostrarEliminar, esAdmin, onEditar, onEliminar }) => {  

    const {
        productos,
        productoDetalle,
        cargandoProductos,
        cargandoDetalle,
        errorProductos,
        errorDetalle,
        cargarProductoPorId
    } = useHook ? useHook() : {};

    const { id } = useParams();

    useEffect(() => {
        if (detailed && id && cargarProductoPorId) {
            cargarProductoPorId(id);
        }
    }, [detailed, id]);

    let items = productosDirectos;

    if (!items && useHook) {
        if (detailed && productoDetalle) {
            items = [productoDetalle];
        } else if (productos) {
            items = productos;
        }
    }

    const cargando = cargandoProductos || cargandoDetalle;
    const error = errorProductos || errorDetalle;

    if (cargando)
        return <h1 className="text-center my-4">Cargando...</h1>;

    if (error)
        return <h1 className="text-center text-danger my-4">{error}</h1>;

    if (!items || items.length === 0)
        return <h1 className="text-center my-4">No hay productos para mostrar.</h1>;

    return (  
        <Container className="my-4">
            <Row className="g-2 justify-content-center">
                {items.map((product, index) => (
                    <Col key={index} xs="auto">
                        <CartaProducto 
                            product={product}
                            detailed={detailed} 
                            mostrarAgregar={mostrarAgregar} 
                            mostrarEliminar={mostrarEliminar}
                            esAdmin={esAdmin}
                            onEditar={onEditar}
                            onEliminar={onEliminar}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );  
}  

export default Gallery;