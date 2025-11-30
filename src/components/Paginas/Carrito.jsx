import { useContext } from "react";
import Main from "../Semantico/Main";
import { Row, Col, Button, Card } from "react-bootstrap";
import { CarritoContext } from "../Contexto/CarritoContext";

const Carrito = () => {
  const { carrito, limpiarCarrito, total } = useContext(CarritoContext);

  return (
    <div className="my-4 mx-4">
      
      <Row className="g-4">
        
        <Col md={9}>
        <h3 className="text-center mb-4">Carrito de Compras</h3>
          <Main
            productos={carrito}
            mostrarAgregar={false}
            mostrarEliminar={true}
          />
        </Col>

        <Col md={3}>
          <Card className="my-4 p-3 shadow-sm bg-dark text-light sticky-top" style={{ top: "40px" }}>

            <h5 className="text-center text-light">Resumen del Pedido</h5>
            <hr />

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Envío</span>
              <span className="text-success">¡Gratis!</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="d-flex flex-column gap-3 mt-4">

              <Button 
                variant="success"
                className="py-2 fw-bold shadow-sm"
              >
                Proceder al Pago
              </Button>

              <Button 
                variant="danger"
                className="py-2 fw-bold shadow-sm"
                onClick={limpiarCarrito}
              >
                Vaciar carrito
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Carrito;