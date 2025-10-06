import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <Col lg={4} md={6}>
      <Card>
        <Card.Img variant="top" src={item.image} style={{ height: "350px" }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.category}</Card.Text>
          <Button onClick={() => navigate(`/item/${item.id}`)}>
            Ver Detalle
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
