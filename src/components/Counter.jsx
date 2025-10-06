import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

function Counter({ item }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => setCount(count + 1);
  const handleSub = () => setCount(count - 1);
  const handleAddToCart = () => {
    addToCart({ ...item, count });
  };

  return (
    <div>
      <p>{count}</p>
      <Button variant="success" onClick={handleAdd}>
        +
      </Button>
      <Button variant="danger" onClick={handleSub} disabled={count === 0}>
        -
      </Button>
      <Button variant="info" onClick={handleAddToCart}>
        Agregar al Carrito
      </Button>
    </div>
  );
}

export default Counter;
