import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const FormProducto = ({ onAgregar }) => {
  const [errores, setErrores] = useState({});
  const [producto, setProducto] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: ""
    }
  });

  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    if (name === "rate" || name === "count") {
      setProducto({ ...producto, rating: { ...producto.rating, [name]: value } });
    } else {
      setProducto({ ...producto, [name]: value });
    }
  };

  const validarForm = () => {
    let nuevosErrores = {};

    if (!producto.title.trim()) {
      nuevosErrores.title = "El título es obligatorio.";
    }

    if (!producto.price.trim()) {
      nuevosErrores.price = "El precio es obligatorio.";
    } else if (isNaN(producto.price) || Number(producto.price) <= 0) {
      nuevosErrores.price = "El precio debe ser un número positivo.";
    }

    if (!producto.description.trim() || producto.description.length < 10) {
      nuevosErrores.description = "La descripción es obligatoria y debe tener al menos 10 caracteres.";
    }

    if (!producto.category.trim()) {
      nuevosErrores.category = "La categoría es obligatoria.";
    }

    if (!producto.image.trim()) {
      nuevosErrores.image = "La URL de la imagen es obligatoria.";
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(producto.image)) {
      nuevosErrores.image = "Debe ser una URL válida de imagen (jpg, png, etc.).";
    }

    if (!producto.rating.rate.trim()) {
      nuevosErrores.rate = "El rating (valoración) es obligatorio.";
    } else if (isNaN(producto.rating.rate) || Number(producto.rating.rate) < 0 || Number(producto.rating.rate) > 5) {
      nuevosErrores.rate = "El rating debe ser un número entre 0 y 5.";
    }

    if (!producto.rating.count.trim()) {
      nuevosErrores.count = "El conteo de valoraciones es obligatorio.";
    } else if (isNaN(producto.rating.count) || Number(producto.rating.count) < 0) {
      nuevosErrores.count = "El conteo debe ser un número positivo.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    if (validarForm()) {
      onAgregar(producto);
      setProducto({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: { rate: "", count: "" }
      });
      setErrores({});
    }
  };

   return (
    <Container className="my-4 d-flex justify-content-center align-items-center">
      <Card className="p-4 bg-dark text-light shadow-lg card1" style={{ maxWidth: "35rem" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4 fs-3">Agregar Producto</Card.Title>

          <Form onSubmit={manejarSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
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
                <Form.Group className="mb-3" controlId="formPrice">
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
                <Form.Group className="mb-3" controlId="formCategory">
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

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="description"
                value={producto.description}
                onChange={manejarChange}
                placeholder="Breve descripción del producto"
                isInvalid={!!errores.description}
              />
              <Form.Control.Feedback type="invalid">{errores.description}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
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
                <Form.Group className="mb-3" controlId="formRate">
                  <Form.Label>Rating (0-5)</Form.Label>
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
                <Form.Group className="mb-3" controlId="formCount">
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

            <div className="text-center mt-4">
              <Button
                variant="success"
                type="submit"
                className="w-100 mt-4 shadow-sm">
                Agregar producto
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
 
};

export default FormProducto;
