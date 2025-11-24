import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useProductosContext } from "../Contexto/ProductoContext";

const FormularioProducto = ({ mostrar, onCerrar, modo = "agregar", productoInicial = {} }) => {
  const { agregarProducto, editarProducto } = useProductosContext();
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);
  const [producto, setProducto] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: { rate: "", count: "" }
  });

  useEffect(() => {
    if (mostrar) {
      setProducto({
        id: productoInicial?.id ?? "",
        title: productoInicial?.title ?? "",
        price: productoInicial?.price ?? "",
        description: productoInicial?.description ?? "",
        category: productoInicial?.category ?? "",
        image: productoInicial?.image ?? "",
        rating: {
          rate: productoInicial?.rating?.rate ?? "",
          count: productoInicial?.rating?.count ?? ""
        }
      });
      setErrores({});
      setCargando(false);
    }
  }, [mostrar, productoInicial]);

  const manejarChange = (e) => {
    const { name, value } = e.target;

    if (name === "rate" || name === "count") {
      setProducto((prev) => ({
        ...prev,
        rating: { ...prev.rating, [name]: value }
      }));
    } else {
      setProducto((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validarForm = () => {
    let nuevosErrores = {};

    if (!producto.title.trim())
      nuevosErrores.title = "El título es obligatorio.";

    if (!producto.price.trim())
      nuevosErrores.price = "El precio es obligatorio.";
    else if (isNaN(producto.price) || Number(producto.price) <= 0)
      nuevosErrores.price = "Debe ser un número positivo.";

    if (!producto.description.trim() || producto.description.length < 10)
      nuevosErrores.description = "La descripción debe tener al menos 10 caracteres.";

    if (!producto.category.trim())
      nuevosErrores.category = "La categoría es obligatoria.";

    if (!producto.image.trim())
      nuevosErrores.image = "La imagen es obligatoria.";
    else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(producto.image))
      nuevosErrores.image = "Debe ser una URL válida de imagen.";

    if (!producto.rating.rate.trim())
      nuevosErrores.rate = "El rating es obligatorio.";
    else if (
      isNaN(producto.rating.rate) ||
      Number(producto.rating.rate) < 0 ||
      Number(producto.rating.rate) > 5
    )
      nuevosErrores.rate = "Debe ser entre 0 y 5.";

    if (!producto.rating.count.trim())
      nuevosErrores.count = "El conteo es obligatorio.";
    else if (isNaN(producto.rating.count) || Number(producto.rating.count) < 0)
      nuevosErrores.count = "Debe ser un número positivo.";

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    if (cargando) return;

    if (!validarForm()) return;

    setCargando(true);

    if (modo === "agregar") {
      await agregarProducto(producto);
    } else {
      await editarProducto(producto);
    }

    setCargando(false);
    onCerrar();
  };

  return (
    <Modal 
      show={mostrar} 
      onHide={onCerrar} 
      centered 
      backdrop="static"
      size="lg"
    >
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title className="bg-dark text-light">
          {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light">
        <Card className="p-3 bg-dark text-light border-0">
          <Form id="formProducto" onSubmit={manejarSubmit}>
            
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={producto.title}
                onChange={manejarChange}
                placeholder="Nombre del producto"
                isInvalid={!!errores.title}
              />
              <Form.Control.Feedback type="invalid">{errores.title}</Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={producto.price}
                    onChange={manejarChange}
                    placeholder="Precio en U$D"
                    isInvalid={!!errores.price}
                  />
                  <Form.Control.Feedback type="invalid">{errores.price}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Categoría</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={producto.category}
                    onChange={manejarChange}
                    placeholder="Ej: Electrónica"
                    isInvalid={!!errores.category}
                  />
                  <Form.Control.Feedback type="invalid">{errores.category}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={producto.description}
                onChange={manejarChange}
                placeholder="Descripción del producto"
                isInvalid={!!errores.description}
              />
              <Form.Control.Feedback type="invalid">{errores.description}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>URL de Imagen</Form.Label>
              <Form.Control
                type="url"
                name="image"
                value={producto.image}
                onChange={manejarChange}
                placeholder="https://ejemplo.com/imagen.jpg"
                isInvalid={!!errores.image}
              />
              <Form.Control.Feedback type="invalid">{errores.image}</Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Rating (0–5)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.1"
                    name="rate"
                    value={producto.rating.rate}
                    onChange={manejarChange}
                    placeholder="Ej: 4.5"
                    isInvalid={!!errores.rate}
                  />
                  <Form.Control.Feedback type="invalid">{errores.rate}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Cantidad de valoraciones</Form.Label>
                  <Form.Control
                    type="number"
                    name="count"
                    value={producto.rating.count}
                    onChange={manejarChange}
                    placeholder="Ej: 100"
                    isInvalid={!!errores.count}
                  />
                  <Form.Control.Feedback type="invalid">{errores.count}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card>
      </Modal.Body>

      <Modal.Footer className="bg-dark text-light d-flex">
        <Button 
              type="submit" 
              form="formProducto"
              variant="success"
              disabled={cargando}
              className="w-40 mt-3"
            >
              {cargando ? "Guardando..." : modo === "agregar" ? "Agregar producto" : "Actualizar producto"}
            </Button>
        <Button variant="danger" onClick={onCerrar} className="w-40 mt-3">
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormularioProducto;