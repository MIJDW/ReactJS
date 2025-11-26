import { useState} from "react";
import FormularioProducto from "./FormularioProducto";
import { useProductosContext } from "../Contexto/ProductoContext";
import Main from "../Semantico/Main";

const GestionProductos = () => {
  const {productosFiltrados, eliminarProducto } = useProductosContext();

  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null); 
    setMostrarForm(true);
  };

  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto); 
    setMostrarForm(true);
  };

  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

   return (
      <>
        <Main
          productos={productosFiltrados}
          detailed={false}
          mostrarAgregar={false}
          mostrarEliminar={false}
          esAdmin={true}
          onEditar={abrirFormularioEditar}
          onEliminar={eliminarProducto}
          onAgregar={abrirFormularioAgregar}
        />
          
          {mostrarForm && (
            <FormularioProducto
              mostrar={mostrarForm}
              productoInicial={productoSeleccionado || {}}
              modo={modoFormulario}
              onCerrar={cerrarFormulario}
            />
          )}
      </>
  );
};

export default GestionProductos;