import { deleteDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { AppContext } from "../../App";
import { db } from "../../firebase";
import "./DeleteCategory.css";

export default function DeleteCategory ({ category }) {
  const { user } = useContext(AppContext);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onDeleteClick() {
    const count = Object.values(products).filter(product => product.category === category.id).length;

    if (count > 0) {
      alert("This category has existing products. Please delete them before deleting a category.");

      return;
    }
    deleteDoc(doc(db, "categories", category.id));
  }

  return (
    <button className="DeleteCategory" onClick={onDeleteClick}>-</button>
  );
}