import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";

export default function Category() {

  const { params } = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: 'Fruits', slug: "fuits"},
    { id: 2, name: 'Fruity', slug: "fruity"},
    { id: 3, name: 'Vegetables', slug: "vegetables"},
    { id: 4, name: 'Dried Fruits', slug: "dried-fruits"},
  ];

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  if (!category) {
    return(
      <NotFound />
    );
  } 

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}