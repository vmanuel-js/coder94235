import { CartContext } from "./CartContext.js";
import { useState } from "react";

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Hagan una función que agregue objetos al carrito
  // No permite duplicados
  const addToCart = (item) => {
    if (carrito.some((prod) => prod.id === item.id)) {
      return;
    }
    setCarrito([...carrito, item]);
  };

  const deleteItem = (id) => {
    const updateCart = carrito.filter((item) => item.id !== id);
    setCarrito(updateCart);
  };

  const getQuantity = () => {
    const quantities = carrito.map((item) => item.count);
    const total = quantities.reduce((acc, current) => acc + current, 0);

    return total;
  };

  const getTotal = () => {
    const precios = carrito.map((item) => item.count * item.price);
    const total = precios.reduce((acc, current) => acc + current, 0);

    return total;
  };

  const value = {
    addToCart,
    getQuantity,
    carrito,
    getTotal,
    deleteItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
