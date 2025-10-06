import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";

function Checkout() {
  const { getTotal, carrito } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;

    const order = {
      buyer: {
        email,
        name,
        phone,
      },
      total: getTotal(),
      items: carrito,
      date: serverTimestamp(),
    };

    createOrder(order);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form className="w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su teléfono"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Finalizar compra 🎉
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;
