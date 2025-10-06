import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItem } from "../firebase/db";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  getItem(id);

  useEffect(() => {
    const fetchAloneItem = async () => {
      try {
        const data = await getItem(id);
        setItem(data);
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };

    fetchAloneItem();
  }, [id]);

  return <ItemDetail item={item}></ItemDetail>;
}

export default ItemDetailContainer;
