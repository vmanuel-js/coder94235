import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { app } from "./config";
import toast from "react-hot-toast";

const db = getFirestore(app);

// Foto de la base de datos en ese momento
export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });

  return items;
};

export const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  querySnapshot.forEach((doc) => {
    categories.push({ ...doc.data(), id: doc.id });
  });

  return categories;
};

// Queries
export const getItemsByCategory = async (category) => {
  const q = query(collection(db, "items"), where("category", "==", category));
  const items = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });

  return items;
};

// Obtener un documento
export const getItem = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    console.log("No such document!");
  }
};

// Agregar data
export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    toast.success(`Gracias por tu compra, el ID de tu orden: ${docRef.id}`);
    return true;
  } catch (error) {
    toast.error(`Ocurrió un error: ${error.code}`);
    return false;
  }
};
