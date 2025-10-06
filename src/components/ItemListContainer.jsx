import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getItems, getItemsByCategory } from "../firebase/db";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (id) {
          const data = await getItemsByCategory(id);
          setItems(data);
        } else {
          const data = await getItems();
          setItems(data);
        }
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };
    fetchItems();
  }, [id]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
