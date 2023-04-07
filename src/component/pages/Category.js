import { useMatch } from "react-router-dom";

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: 'Fruits', slug: "fuits"},
    { id: 2, name: 'Vegetables', slug: "vegetables"},
    { id: 3, name: 'Dried Fruits', slug: "dried-fruits"},
    { id: 4, name: 'Fruity', slug: "fruity"},
  ];

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}