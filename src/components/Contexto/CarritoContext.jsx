import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({children}){

  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const calcularTotal = (items) => {
    return items.reduce(
      (acc, producto) => acc + producto.cantidad * parseFloat(producto.price),
      0
    );
  };

  const agregarCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);

      let nuevoCarrito;

      if (existe) {
        nuevoCarrito = prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        nuevoCarrito = [...prev, { ...producto, cantidad: 1 }];
      }

      setTotal(calcularTotal(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const restarCantidad = (id) => {
    setCarrito(prev => {
      const nuevoCarrito = prev
        .map(item =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter(item => item.cantidad > 0);

      setTotal(calcularTotal(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const eliminarCarrito = (id) => {
    const nuevoCarrito = carrito.filter(producto => producto.id !== id);
    setCarrito(nuevoCarrito);
    setTotal(calcularTotal(nuevoCarrito));
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    setTotal(0);
  };

  return (
    <CarritoContext.Provider 
      value={{ carrito, agregarCarrito, restarCantidad, eliminarCarrito, limpiarCarrito, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
};