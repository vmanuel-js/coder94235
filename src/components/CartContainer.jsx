import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function CartContainer() {
  const { carrito, getTotal, deleteItem } = useContext(CartContext);
  const total = getTotal();
  const navigate = useNavigate();

  if (carrito.length === 0) {
    return <div>No tienes productos en el carrito 😔</div>;
  }

  return (
    <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
      <ListGroup className="w-50">
        {carrito.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between"
          >
            {item.name} x {item.count} ---- {item.price}
            <Button variant="danger" onClick={() => deleteItem(item.id)}>
              X
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2 className="mt-3">Total: ${total}</h2>
      <Button className="w-50 mt-3" onClick={() => navigate("/checkout")}>
        Checkout
      </Button>
    </div>
  );
}

export default CartContainer;
