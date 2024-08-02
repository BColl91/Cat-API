import React from 'react';
import styled from 'styled-components';
// import './Basket.css';

const Basket = ({ basketItems, setBasketItems, closeBasket }) => {
  const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);

  return (
    <basketModal className={`basket ${basketItems.length ? 'show' : ''}`}>
      <basketContents>
        <closeBtn onClick={closeBasket}>X</closeBtn>
        <upper-title>Basket</upper-title>
        {basketItems.length === 0 ? (
          <base-text>Your basket is empty</base-text>
           ) : (
          basketItems.map((item, index) => (
            <basket-item key={index}>
              <products>{item.name}</products>
              <p>Price: £{item.price}</p>
              <button onClick={() => {
                const newBasketItems = basketItems.filter((_, i) => i !== index);
                setBasketItems(newBasketItems);
              }}>Remove</button>
            </basket-item>
          ))
        )}
        <h3>Total: £{totalPrice}</h3>
      </basketContents>
    </basketModal>
  );
}

export default Basket;
// NEED TO SORT THIS OUT 

const basketModal=styled.div` 
 .basket {
  border: black;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  /* background-image: ; */
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}`;

const basketContents=styled.div` 
  padding: 20px;
`;

const closeBtn=styled.button `
  background: none;
  border: none;
  font-size: 1.5em;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

// .header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
// }

// .basket-button {
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   padding: 0.5rem 1rem;
//   background-color: #00fff7;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .basket-modal {
//   position: fixed;
//   top: 0;
//   right: 0;
//   height: 100%;
//   width: 300px;
//   background-color: white;
//   box-shadow: -2px 0 5px rgba(0,0,0,0.5);
//   transform: translateX(100%);
//   transition: transform 0.3s ease-in-out;
// }

// .basket-modal.show {
//   transform: translateX(0);
// }

// .basket-content {
//   padding: 1rem;
// }

// .close-btn {
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   background-color: transparent;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
// }

// .basket-item {
//   border-bottom: 1px solid #ccc;
//   padding: 0.5rem 0;
// }