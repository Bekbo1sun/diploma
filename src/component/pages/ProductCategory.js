import "./ProductCategory.css";
import React from 'react';

function ProductCategory({ category }) {
  return (
    <div className="product-category">
      <h2>{category.name}</h2>
      <div className="product-list">
        {category.products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;
