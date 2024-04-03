import React from 'react';
import ProductCategory from './ProductCategory'; // Путь к вашему компоненту категории продуктов
import "./Home.css";

function Home() {
  const categories = [
    {
      name: 'Electronics',
      products: [
        { id: 1, name: 'Smartphone', image: 'https://i1.stat01.com/2/3752/137515038/afacdb/kuraga-quot-korolevskaya-quot-vysshij-sort.jpg', description: '...', price: '500som' },
        { id: 2, name: 'Laptop', image: 'https://firebasestorage.googleapis.com/v0/b/diplom-597c7.appspot.com/o/products%2F072facdc-36f4-4b3a-842d-9a3558da8498.jpg?alt=media&token=2cb390aa-d488-490a-962d-ab7073efe2ce', description: '...', price: '1000som' },
      ],
    },
    {
      name: 'Clothing',
      products: [
        { id: 3, name: 'T-Shirt', image: 'https://firebasestorage.googleapis.com/v0/b/diplom-597c7.appspot.com/o/products%2F07034e7a-0ffc-4d0d-b868-a6ba399f6514.jpg?alt=media&token=086a0e48-9795-4488-9732-4c7105d8d517', description: '...', price: '20som' },
        { id: 4, name: 'Jeans', image: 'https://firebasestorage.googleapis.com/v0/b/diplom-597c7.appspot.com/o/products%2F9f19b3d4-6b2b-40b7-a27f-b78bd03d7129.jpg?alt=media&token=0511630a-0173-4792-b166-544d6732377b', description: '...', price: '50 som' },
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
