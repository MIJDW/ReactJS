import { Container, Row, Col } from 'react-bootstrap';
import CartaProducto from './CartaProducto';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CarritoContext } from '../Contexto/CarritoContext';

const Gallery = ({ useHook, productos: productosDirectos, detailed, mostrarAgregar, mostrarEliminar, esAdmin, onEditar, onEliminar }) => {  

    const {
        productos,
        productosFiltrados,
        productoDetalle,
        cargandoProductos,
        cargandoDetalle,
        errorProductos,
        errorDetalle,
        cargarProductoPorId
    } = useHook ? useHook() : {};

    const {total} = useContext(CarritoContext);

    const { id } = useParams();

    const itemsPorPagina = 8;
    const [paginaActual, setPaginaActual] = useState(1);

    useEffect(() => {
        if (detailed && id && cargarProductoPorId) {
            cargarProductoPorId(id);
        }
    }, [detailed, id]);

    let items = productosDirectos;

    if (!items && useHook) {
        if (detailed && productoDetalle) {
            items = [productoDetalle];
        } else if (productosFiltrados && productosFiltrados.length > 0) {
            items = productosFiltrados;
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

    const totalPaginas = Math.ceil(items.length / itemsPorPagina);
    const indexInicial = (paginaActual - 1) * itemsPorPagina;
    const indexFinal = indexInicial + itemsPorPagina;
    const itemsPaginados = items.slice(indexInicial, indexFinal);

    const cambiarPagina = (num) => {
        setPaginaActual(num);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (  
        <Container className="my-4">
            <Row className="g-2 justify-content-center">
                {itemsPaginados.map((product, index) => (
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

            {totalPaginas > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <nav>
                        <ul className="pagination">

                            <li className={`page-item ${paginaActual === 1 ? "disabled" : ""}`}>
                                <button 
                                    className="page-link bg-dark text-light"
                                    onClick={() => cambiarPagina(paginaActual - 1)}
                                >
                                    &laquo;
                                </button>
                            </li>

                            {[...Array(totalPaginas)].map((_, i) => (
                                <li 
                                    key={i}
                                    className={`page-item ${paginaActual === i + 1 ? "active" : ""}`}
                                >
                                    <button 
                                        className="page-link bg-dark text-light"
                                        onClick={() => cambiarPagina(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${paginaActual === totalPaginas ? "disabled" : ""}`}>
                                <button 
                                    className="page-link bg-dark text-light"
                                    onClick={() => cambiarPagina(paginaActual + 1)}
                                >
                                    &raquo;
                                </button>
                            </li>

                        </ul>
                    </nav>
                </div>
            )}

        </Container>
    );  
}  

export default Gallery;