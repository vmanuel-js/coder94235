import NavBar from "./NavBar";
import { getCategories } from "../firebase/db";
import { useEffect, useState } from "react";

function NavBarContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };

    fetchCategories();
  }, []);

  return <NavBar categories={categories} />;
}

export default NavBarContainer;
