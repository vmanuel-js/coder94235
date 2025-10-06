import { Container, Row, Col, Image } from "react-bootstrap";
import Counter from "./Counter";

function ItemDetail({ item }) {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Image src={item?.image} style={{ height: "400px" }} />
        </Col>
        <Col>
          <h2>{item?.name}</h2>
          <p>${item?.price}</p>
          <p>{item?.description}</p>
          <Counter item={item}></Counter>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
