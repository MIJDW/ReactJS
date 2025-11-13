import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({children}){
    const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setTotal(total + parseFloat(producto.price));
  };

  const eliminarCarrito = (id) => {
    setCarrito(previo => {
      const index = previo.findIndex(producto => producto.id === id);
      const nuevoCarrito = [...previo];
      nuevoCarrito.splice(index, 1);
      const nuevoTotal = nuevoCarrito.reduce((contador, producto) => contador + parseFloat(producto.price), 0);
      setTotal(nuevoTotal);
      return nuevoCarrito;
    });
  };
  
  const limpiarCarrito = () => {
    setCarrito([]);
    setTotal(0);
  };
    return <CarritoContext.Provider value={{carrito, agregarCarrito, eliminarCarrito, limpiarCarrito, total}}>
                {children}
           </CarritoContext.Provider>
};