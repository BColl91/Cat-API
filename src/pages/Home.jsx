import React from 'react';
import styled from 'styled-components';

const AboutCats = ({ allCats, setBasketItems }) => {
  const addToBasket = (cat) => {
    const newCat = {
      name: `Cat ${allCats.indexOf(cat) + 1}`,
      price: 100,
      image: cat.url
    };
    setBasketItems(prevItems => [...prevItems, newCat]);
  };
  return (
    <>
      <HomePage>
      <div>
      <Title>
          <div className=''></div>
          <Logo>
          <div className=''>
         <div className="">{/*logo image*/}</div>
          </div>
      </Logo>
      </Title>
      <CatList>
         <Grid> 
             {allCats.map((cat, index) => (
                <Container>
                   <CatDiv key={index}>
                    {/* <img src= /> */}
                    <img src={cat.url} alt="cat"/>
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
    </>
  )
};

export default Home;
const Logo=styled.div`
 /* border: #024e25 solid; */
 `;
const CatList=styled.div`

width: 900px;

`;
const Grid=styled.div`
margin-left: 30px;
/* border: blue solid; */
display: grid;
grid-template-columns: repeat(5, 1fr) ;
grid-template-rows: (6,1fr);
grid-gap: 5px;
`;

const Container=styled.div`
/* backgound image */
/* border: gray solid; */
height: 220px;
width: 160px;
display: flex;
justify-content: center;

`;
const CatDiv=styled.div`

/* border: black solid; */
height:170px ;
display: flex;
flex-direction: column;


img{
    /* border:white solid; */
    height: 100px;
}
`;

const Bottom=styled.div`
/* border: pink solid; */


`;
const Title =styled.div`
/* border: red solid; */
height: 20px;
p{
    /* border: red solid; */
}
`;
const Price =styled.div`
/* border: blue solid; */
height: 20px;
p{
    /* border:green solid; */
}
`;
const Button =styled.div`
`;

