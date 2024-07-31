import React from 'react';

const Home = ({ allCats, setBasketItems }) => {
  const addToBasket = (cat) => {
    const newCat = {
      name: `Cat ${allCats.indexOf(cat) + 1}`,
      price: 100,
      image: cat.url
    };
    setBasketItems(prevItems => [...prevItems, newCat]);
  };

  return (
    <div>
      <h2>Cat Products</h2>
      <div className="cat-list">
        {allCats.map((cat, index) => (
          <div key={index} className="cat-item">
            <img src={cat.url} alt="cat" />
            <h3>Cat {index + 1}</h3>
            <p>Price: $100</p>
            <button onClick={() => addToBasket(cat)}>Add to Basket</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;