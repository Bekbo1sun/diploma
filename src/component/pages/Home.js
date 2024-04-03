import React from 'react';
import ProductCategory from './ProductCategory'; // Путь к вашему компоненту категории продуктов
import "./Home.css";

function Home() {
  const categories = [
    {
      name: 'Electronics',
      products: [
        { id: 1, name: 'Smartphone', image: 'phone.jpg', description: '...', price: '$500' },
        { id: 2, name: 'Laptop', image: 'laptop.jpg', description: '...', price: '$1000' },
      ],
    },
    {
      name: 'Clothing',
      products: [
        { id: 3, name: 'T-Shirt', image: 'shirt.jpg', description: '...', price: '$20' },
        { id: 4, name: 'Jeans', image: 'jeans.jpg', description: '...', price: '$50' },
      ],
    },
    // Другие категории продуктов
  ];

  return (
    <div className="home-page">
      <h1>Welcome to Markom Store!</h1>
      <div className="categories">
        {categories.map((category) => (
          <ProductCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Home;
