import React from 'react';
import styled from 'styled-components';

// Define HomePage styled-component
const HomePage = styled.div`
  padding: 20px;
  background-color: #f5f5f5; /* Adjust as per your design */
`;

const Home = ({ allCats, setBasketItems }) => {
  const addToBasket = (cat) => {
    const newCat = {
      name: `Cat ${allCats.indexOf(cat) + 1}`,
      price: 100,
      image: cat.url,
    };
    setBasketItems((prevItems) => [...prevItems, newCat]);
  };

  return (
    <HomePage>
      <div>
        <Title>
          <Logo>
            {/* Add your logo image or content here */}
          </Logo>
        </Title>
        <CatList>
          <Grid>
            {allCats.map((cat, index) => (
              <Container key={index}>
                <CatDiv>
                  <img src={cat.url} alt="cat" />
                  <Bottom>
                    <Title>
                      <p>{cat.name}</p>
                    </Title>
                    <Price>
                      <p>Price: {cat.price}</p>
                    </Price>
                    <Button>
                      <button onClick={() => addToBasket(cat)}>Add to Basket</button>
                    </Button>
                  </Bottom>
                </CatDiv>
              </Container>
            ))}
          </Grid>
        </CatList>
      </div>
    </HomePage>
  );
};

export default Home;

// Styled Components
const Logo = styled.div`
  /* Style your logo here */
`;

const CatList = styled.div`
  width: 900px;
`;

const Grid = styled.div`
  margin-left: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

const Container = styled.div`
  height: 220px;
  width: 160px;
  display: flex;
  justify-content: center;
`;

const CatDiv = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;

  img {
    height: 100px;
  }
`;

const Bottom = styled.div``;

const Title = styled.div`
  height: 20px;
`;

const Price = styled.div`
  height: 20px;
`;

const Button = styled.div``;
