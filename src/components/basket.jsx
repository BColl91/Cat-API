import React from 'react';

const Basket = ({ basketItems, setBasketItems }) => {
  const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="basket">
      <h2>Basket</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        basketItems.map((item, index) => (
          <div key={index} className="basket-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => {
              const newBasketItems = basketItems.filter((_, i) => i !== index);
              setBasketItems(newBasketItems);
            }}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default Basket;
