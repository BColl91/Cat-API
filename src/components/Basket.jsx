import React from 'react';
import styled from 'styled-components';

const Basket = ({ basketItems, setBasketItems, closeBasket }) => {
  const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);

  return (
    <BasketModal className={`basket ${basketItems.length ? 'show' : ''}`}>
      <BasketContents>
        <CloseBtn onClick={closeBasket}>X</CloseBtn>
        <UpperTitle>Basket</UpperTitle>
        {basketItems.length === 0 ? (
          <BaseText>Your basket is empty</BaseText>
        ) : (
          basketItems.map((item, index) => (
            <BasketItem key={index}>
              <Products>{item.name}</Products>
              <p>Price: £{item.price}</p>
              <button onClick={() => {
                const newBasketItems = basketItems.filter((_, i) => i !== index);
                setBasketItems(newBasketItems);
              }}>Remove</button>
            </BasketItem>
          ))
        )}
        <h3>Total: £{totalPrice}</h3>
      </BasketContents>
    </BasketModal>
  );
}

export default Basket;

const BasketModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  &.show {
    transform: translateX(0);
  }
`;

const BasketContents = styled.div`
  padding: 20px;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const UpperTitle = styled.div`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const BaseText = styled.div`
  font-size: 1em;
  margin-bottom: 10px;
`;

const BasketItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;