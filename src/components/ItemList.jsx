import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
