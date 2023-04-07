import { NavLink } from "react-router-dom";

export default function CategoryList() {
  const categories = [
    { id: 1, name: 'Fruits', slug: "fuits"},
    { id: 2, name: 'Vegetables', slug: "vegetables"},
    { id: 3, name: 'Dried fruits', slug: "dried-fruits"},
    { id: 4, name: 'Fruity', slug: "fruity"},
  ];

  const output = categories.map((category) =>(
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  )
}