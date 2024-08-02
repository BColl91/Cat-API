import React from 'react';
// import './Basket.css';

const Basket = ({ basketItems, setBasketItems, closeBasket }) => {
  const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className={`basket-modal ${basketItems.length ? 'show' : ''}`}>
      <div className="basket-content">
        <button className="close-btn" onClick={closeBasket}>X</button>
        <h2>Basket</h2>
        {basketItems.length === 0 ? (
          <p>Your carrier is empty</p>
        ) : (

          basketItems.map((cat, index) => (
            <div key={index} className="basket-item">
              <h3>{cat.name}</h3>
              <p>Price: £{cat.price}</p>
              <button onClick={() => {
                const newBasketItems = basketItems.filter((_, i) => i !== index);
                setBasketItems(newBasketItems);
              }}>Remove Cat</button>
            </div>
          ))
        )}
        <h3>Total: £{totalPrice}</h3>
      </div>
    </div>
  );
}

export default Basket;
