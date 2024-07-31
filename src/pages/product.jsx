import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  let { productName } = useParams();
  return (
    <div>
      <h2>Product: {productName}</h2>
      {/* Add product details here */}
    </div>
  )
}

export default Product;