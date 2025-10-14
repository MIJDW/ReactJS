import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CartaSimple = ({ product , agregarCarrito, eliminarCarrito, mostrarAgregar, mostrarEliminar}) => {
  return (
    <Card className="mb-3 shadow-sm card1 bg-dark text-light" style={{minHeight: '32rem', minWidth: '17rem', maxWidth: '17rem',}}>
      <Link to={`/detalle/${product.id}`}>
        <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.title} 
        style={{ height: '200px', objectFit: 'contain', padding: '0.5rem' }}
      />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-secondary">{product.category}</Card.Subtitle>
        <Card.Text style={{ flexGrow: 1 }}>
          <strong>Precio:</strong> ${product.price.toFixed(2)} <br />      
        </Card.Text>
        <div className="d-flex justify-content-between mt-3">
          {mostrarAgregar && (
            <>
              <Button variant="success" size="sm" onClick={() => agregarCarrito(product)}>
                Agregar
              </Button>
            </>
          )}
          {mostrarEliminar && (
            <>
              <Button variant="danger" size="sm" onClick={() => eliminarCarrito(product.id)}>
                Eliminar
              </Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default CartaSimple;