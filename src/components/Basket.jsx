import React from 'react';
import styled from 'styled-components';

const Basket = ({ basketItems, setBasketItems, closeBasket }) => {
  const totalPrice = basketItems.reduce((total, item) => total + parseFloat(item.price), 0);

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
              <CatImage src={item.url} alt={item.name} />
              <Products>
                <p>{item.name}</p>
                <p>Price: £{item.price}</p>
                <button onClick={() => {
                  const newBasketItems = basketItems.filter((_, i) => i !== index);
                  setBasketItems(newBasketItems);
                }}>Remove</button>
              </Products>
            </BasketItem>
          ))
        )}
        <h3>Total: £{totalPrice.toFixed(2)}</h3>
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
  background-color: #040404d6;
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
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
`;

const Products = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
`;

const CatImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
