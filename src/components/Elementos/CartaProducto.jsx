import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../Contexto/CarritoContext';
import { FaTrash, FaPen } from "react-icons/fa";

const CartaProducto = ({product, detailed = false, mostrarAgregar = true, mostrarEliminar = false, esAdmin = false, onEditar, onEliminar}) => {
    const {agregarCarrito, eliminarCarrito} = useContext(CarritoContext);
  return (
    <Card
      className="mb-3 shadow-sm card1 bg-dark text-light"
      style={{
        minHeight: detailed ? 'auto' : '32rem',
        minWidth: detailed ? 'auto' : '17rem',
        maxWidth: detailed ? '25rem' : '17rem',
      }}
    >
      {detailed ? (
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          style={{ height: '200px', objectFit: 'contain', padding: '0.5rem' }}
        />
      ) : (
        <Link to={`/detalle/${product.id}`}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{ height: '200px', objectFit: 'contain', padding: '0.5rem' }}
          />
        </Link>
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-secondary">{product.category}</Card.Subtitle>

        <Card.Text style={{ flexGrow: 1 }}>
          
          {detailed && (
            <>
              <strong>Descripción:</strong> {product.description} <br />
            </>
          )}

          <strong>Precio:</strong> ${parseFloat(product.price).toFixed(2)} <br />

          {detailed && product.rating && (
            <>
              <strong>Rating:</strong> {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </>
          )}
        </Card.Text>

        <div className="d-flex justify-content-between mt-3">
           {esAdmin ? (
            <>
              <Button variant="warning" size="sm" onClick={() => onEditar(product)}>
                <FaPen />
              </Button>

              <Button variant="danger" size="sm" onClick={() => onEliminar(product.id)}>
                <FaTrash />
              </Button>
            </>
          ) : (
            <>
              {mostrarAgregar && (
                <Button variant="success" size="sm" onClick={() => agregarCarrito(product)}>
                  Agregar
                </Button>
              )}

              {mostrarEliminar && (
                <Button variant="danger" size="sm" onClick={() => eliminarCarrito(product.id)}>
                  Eliminar
                </Button>
              )}
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default CartaProducto;