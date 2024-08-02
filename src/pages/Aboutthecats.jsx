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
    <div>
      <Title>
          <div className=''></div>
          <Logo>
          <div className=''>
         <div className="">{/*logo image*/}</div>
          <h2>Cat Products</h2>
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
                             <p>Cat {index + 1}</p>
                           </Title>  
                           <Price>
                             <p>Price: £150</p>
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
  )
}

export default AboutCats;
 const Logo=styled.div`
 border: red solid;
 `;
const CatList=styled.div`

width: 900px;

`;
const Grid=styled.div`
margin-left: 30px;
border: blue solid;
display: grid;
grid-template-columns: repeat(5, 1fr) ;
grid-template-rows: (6,1fr);
grid-gap: 5px;
`;

const Container=styled.div`
/* backgound image */
border: gray solid;
height: 220px;
width: 160px;
display: flex;
justify-content: center;

`;
const CatDiv=styled.div`

border: black solid;
height:170px ;
display: flex;
flex-direction: column;


img{
    border:white solid;
    height: 100px;
}
`;

const Bottom=styled.div`
border: pink solid;


`;
const Title =styled.div`
/* border: red solid; */
height: 20px;
p{
    border: red solid;
}
`;
const Price =styled.div`
/* border: blue solid; */
height: 20px;
p{
    border:green solid;
}
`;
const Button =styled.div`
`;
