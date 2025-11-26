import { Form } from "react-bootstrap";
import { useProductosContext } from "../Contexto/ProductoContext";

const Buscador = () => {
  const { busqueda, setBusqueda } = useProductosContext();

  return (
    <Form.Control
      type="text"
      placeholder="Buscar..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="mx-3 w-50"
    />
  );
};

export default Buscador;
