import { useState, useEffect, createContext, useContext } from "react";
export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const API = "https://6915352784e8bd126af9131c.mockapi.io/productos";

  const [productos, setProductos] = useState([]);
  const [cargandoProductos, setCargandoProductos] = useState(true);
  const [errorProductos, setErrorProductos] = useState(null);

  const [productoDetalle, setProductoDetalle] = useState(null);
  const [cargandoDetalle, setCargandoDetalle] = useState(false);
  const [errorDetalle, setErrorDetalle] = useState(null);

  const cargarProductos = async () => {
    try {
      setCargandoProductos(true);
      setErrorProductos(null);

      const r = await fetch(API);
      if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);

      const data = await r.json();
      setProductos(data);
    } catch (error) {
      setErrorProductos("No se pudieron cargar los productos.");
    } finally {
      setCargandoProductos(false);
    }
  };

  const cargarProductoPorId = async (id) => {
    try {
      setCargandoDetalle(true);
      setErrorDetalle(null);

      const r = await fetch(`${API}/${id}`);
      if (!r.ok) throw new Error("Error al cargar el detalle");

      const data = await r.json();
      setProductoDetalle(data);
    } catch (error) {
      setErrorDetalle("No se pudo cargar el producto.");
    } finally {
      setCargandoDetalle(false);
    }
  };
  
  useEffect(() => {
      cargarProductos();
  }, []);

  const agregarProducto = async (producto) => {
    try {
      setErrorProductos(null);

      console.log(`${API}/${producto.id}`);
      console.log("EDITAR PRODUCTO:", producto);

      const r = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);

      const nuevo = await r.json();
      setProductos([...productos, nuevo]);
    } catch (error) {
      console.error("Error agregar:", error);
      setErrorProductos("No se pudo agregar el producto.");
    }
  };

  const editarProducto = async (producto) => {
    try {
      setErrorProductos(null);

      const r = await fetch(`${API}/${producto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!r.ok) throw new Error(`Error HTTP: ${r.status}`);

      const actualizado = await r.json();

      setProductos(productos.map(p => p.id === actualizado.id ? actualizado : p));

      if (productoDetalle?.id === actualizado.id) {
        setProductoDetalle(actualizado);
      }

    } catch (error) {
      console.error("Error editar:", error);
      setErrorProductos("No se pudo editar el producto.");
    }
  };

  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Seguro de eliminar?")) return;

    try {
      setErrorProductos(null);

      const r = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!r.ok) throw new Error("Error al eliminar");

      setProductos(productos.filter(p => p.id !== id));

      if (productoDetalle?.id === id) {
        setProductoDetalle(null);
      }

    } catch (error) {
      console.error("Error eliminar:", error);
      setErrorProductos("No se pudo eliminar el producto.");
    }
  };

  return (
    <ProductosContext.Provider
      value={{
        productos,
        cargandoProductos,
        errorProductos,

        productoDetalle,
        cargandoDetalle,
        errorDetalle,

        cargarProductos,
        cargarProductoPorId,
        agregarProducto,
        editarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductosContext = () => useContext(ProductosContext);