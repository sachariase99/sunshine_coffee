// ProductCards.jsx
import React, { useEffect, useState } from 'react';

const ProductCards = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    fetch('http://localhost:8081/products/getAll')
      .then(response => response.json())
      .then(products => setProducts(products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {products.map(item => (
          <div className='flex flex-col m-auto' key={item.id}>
            <h2 className='text-[64px] md:text[80px] lg:text-[96px] font-licorice mb-4 text-center'>{item.name}</h2>
            <img className='object-cover h-[349px] w-[349px] rounded-lg' src={item.image} alt={item.name} />
            <p className='max-w-[349px] h-[700px] mt-8 text-[24px]'>{item.description}</p>

            <div className='font-inika flex flex-col justify-start'>
              <p className='text-[24px]'>Price: {item.price} DKK</p>
              <button onClick={() => handleAddToCart(item)} className="px-16 bg-black text-white text-[24px] py-4 rounded-lg mb-12 mt-8">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
