import Gallery from "../Elementos/Gallery";
import { FaPlusCircle } from "react-icons/fa";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

const Main = ({
  useHook,
  productos,
  detailed,
  mostrarAgregar,
  mostrarEliminar,
  esAdmin = false,
  onEditar,
  onEliminar,
  onAgregar
}) => {  
  return (  
    <main>  
      {esAdmin && (
        <Container className="text-center mb-4">
          <Row className="mb-3">
            <Col>
              <h2 className="fw-bold m-0">Lista de Productos</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                variant="success"
                onClick={onAgregar}
                className="px-4 py-2"
              >
                <Stack
                  direction="horizontal"
                  gap={2}
                  className="justify-content-center"
                >
                  <FaPlusCircle size={18} />
                  <span>Agregar Producto</span>
                </Stack>
              </Button>
            </Col>
          </Row>
        </Container>
      )}

      <Gallery 
        useHook={useHook}
        productos={productos}
        detailed={detailed}
        mostrarAgregar={mostrarAgregar}
        mostrarEliminar={mostrarEliminar}
        esAdmin={esAdmin}
        onEditar={onEditar}
        onEliminar={onEliminar}
      />
    </main>  
  );  
};  

export default Main;