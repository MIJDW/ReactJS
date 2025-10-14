import CartaSimple from "./Elementos/CartaSimple";
import Main from "./Semantico/Main";
import { Row, Col, Button, Card } from "react-bootstrap";

const Carrito = ({ carrito, eliminarCarrito, limpiarCarrito, total }) => {
  return (
    <div className="my-4 mx-4">
      <Card className="mb-4 p-3 shadow-sm bg-dark">
        <Row className="align-items-center">
          <Col>
            <h5 className="text-light">Productos en el carrito: {carrito.length}</h5>
            <h5 className="text-light">Precio total: ${total.toFixed(2)}</h5>
          </Col>
          <Col className="text-end">
            <Button variant="danger" onClick={limpiarCarrito}>
              Vaciar carrito
            </Button>
          </Col>
        </Row>
      </Card>
      <Main
        productos={carrito}
        Carta={CartaSimple}
        eliminarCarrito={eliminarCarrito}
        mostrarAgregar={false}
        mostrarEliminar={true}
      />
    </div>
  );
};

export default Carrito;