import { useState } from "react";
import "./AddCategory.css";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function onAddCategory() {

  }
  return (
    <div className="AddCategory">
      <input 
        size="15"
        type="text" 
        placeholder="Category name" 
        onAbort={onChangeCategory} 
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
};

export default AddCategory;