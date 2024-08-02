import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';

<<<<<<< HEAD
import About from "./pages/About"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Basket from './components/Basket'
import AboutCats from './pages/Aboutthecats'
import style from 'style-component'
import styled from 'styled-components'

=======
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Basket from './components/Basket';


import Dropdown1 from './components/Dropdown1';
import Dropdown from './components/Dropdown';  
>>>>>>> 50a37296d783d2170244a4a4807084c48884c858

import facebookIcon from './images/facebook.png'
import instagramIcon from './images/insta.png'
import twitterIcon from './images/xIcon.png'
import githubIcon from './images/github.png'
import phoneIcon from './images/phoneIcon.png'
import emailIcon from './images/emailIcon.png'
import basketIcon from './images/basketIcon.png'
import dropdownIcon from './images/dropdownIcon.png'
import homeIcon from './images/homeIcon.png'
import logo from './images/logo.png'

import basketContents from './images/basket-contents.png'
import bigFlower from './images/big-flower.png'
import bigFlower2 from './images/big-flower2.png'
import checkoutBG from './images/checkoutBackground.png'
import flowerMain from './images/flower main.png'
import flowerMain2 from './images/flower main2.png'
import flowerTitle from './images/flower title.png'
import background from './images/image background.png'
import board from './images/image board.png'
import memo from './images/memo pad.png'
import modalBackground from './images/modalBackground.png'
import modalBackground2 from './images/modalBackground2.png'
import socials from './images/socials.png'
import titleBG from './images/title-background.png'



const App = () => {
  const [allCats, setAllCats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [basketItems, setBasketItems] = useState([]);
  const [showBasket, setShowBasket] = useState(false);
  const [breedDescriptions, setBreedDescriptions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=30&has_breeds=1&api_key=live_DO94hgpUSYCxmgPfdoEM2Nj1K298EsCtTLVewqoH4mxkpvZi5NLOKVHORPcqm64P");

      if (!response.ok) {
        throw new Error("There is a problem!");
      }

      const catsData = await response.json();
      setAllCats(catsData.map(cat => ({
        ...cat,
        name: faker.person.firstName(),

        price: faker.finance.amount({ min: 50, max: 2000 })

        
      })));

      
      const breedsResponse = await fetch("https://api.thecatapi.com/v1/breeds?api_key=live_DO94hgpUSYCxmgPfdoEM2Nj1K298EsCtTLVewqoH4mxkpvZi5NLOKVHORPcqm64P");
      if (!breedsResponse.ok) {
        throw new Error("ERROR");
      }

      const breedsData = await breedsResponse.json();
      setBreedDescriptions(breedsData.map(breed => ({
        name: breed.name,
        description: breed.description
      })));

      setErrorMsg("");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  const handleBreedSelect = (selectedBreed) => {
    console.log('Selected Breed:', selectedBreed);
    
  };

  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Body>
      <BorderOne>
       <BorderTwo>
         <Topbar>
           <Logo>
             <h1>CATS FOR LIFE</h1>
           </Logo>
            <Icon>
              {/* images instead */}
             <button onClick={() => setShowBasket(!showBasket)}>
               Basket ({basketItems.length})
            </button>
=======
      <div className="header">
        <h1>CATS FOR LIFE</h1>
        <div className="top-right">
          <Dropdown1 />
        </div>
        <button className="basket-button" onClick={() => setShowBasket(!showBasket)}>
          Basket ({basketItems.length})
        </button>
      </div>
>>>>>>> 50a37296d783d2170244a4a4807084c48884c858

            <nav>
              {/* images */}
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/About-The-Cats">About Cats</Link>
            </nav>
           </Icon>
         </Topbar>
            <MiddleSection>
               <Contents>
                  <Routes>
                   <Route path="/Home" element={<Home/>}/>
                   <Route path="/About" element={<About breedDescriptions={breedDescriptions} />} />
                   <Route path="/:productName" element={<Product />} />
                   <Route path="/About-The-Cats" element={<AboutCats allCats={allCats} setBasketItems={setBasketItems}/>}/>
                  </Routes>
               </Contents>
                  <KeepClear></KeepClear>
            </MiddleSection>

          {errorMsg && <p>{errorMsg}</p>}
           {showBasket && <Basket basketItems={basketItems} setBasketItems={setBasketItems} closeBasket={() => setShowBasket(false)} />}

<<<<<<< HEAD
         <footer>
               <p>DISCLAIMER <br />
                This is a mock site created by Sam.H, Chris.C and Bex.C using react.</p>
                <Socials>
                  <Wrapper>
                <h3>SOCIALS</h3>
                <p>Contact us at: <a href="mailto:contact@cats4lyfe.com">contact@cats4lyfe.com</a></p>
                {/* images/icons */}
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
               {/* <a href="https://github.com/SHilditch4177" target="_blank" rel="noopener noreferrer">SAM GitHub (ARE YOU COOL WITH THIS LINK SAM??<3)</a>
               <a href="https://github.com/ChrisCCodenation" target="_blank" rel="noopener noreferrer">CHRIS GitHub</a>
               <a href="https://github.com/BColl91" target="_blank" rel="noopener noreferrer">BEX GitHub</a> */}
               </Wrapper>
             </Socials>
          </footer>
        </BorderTwo>
      </BorderOne>
     </Body>  
=======
      {showBasket && <Basket basketItems={basketItems} setBasketItems={setBasketItems} closeBasket={() => setShowBasket(false)} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home allCats={allCats} setBasketItems={setBasketItems} />
             
              <Dropdown breeds={breedDescriptions} onSelectBreed={handleBreedSelect} />
            </>
          }
        />
        <Route path="/About" element={<About breedDescriptions={breedDescriptions} />} />
        <Route path="/:productName" element={<Product />} />
      </Routes>

      <footer>
        <p>DISCLAIMER <br />
          This is a mock site created by Sam.H, Chris.C and Bex.C using react.</p>
        <h3>SOCIALS</h3>
        <p><img src={emailIcon}/><a href="mailto:contact@cats4lyfe.com">contact@cats4lyfe.com</a></p>
        <p><img src={phoneIcon} />0151 123 1234</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://github.com/SHilditch4177" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Sam's GitHub" />
          </a>
          <a href="https://github.com/ChrisCCodenation" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Chris's GitHub" />
          </a>
          <a href="https://github.com/BColl91" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Bex's GitHub" />
          </a>
        </div>
      </footer>
>>>>>>> 50a37296d783d2170244a4a4807084c48884c858
    </BrowserRouter>
    
  );
}
<<<<<<< HEAD
export default App
const Body=styled.body`
/* border: purple solid ; */
`;

const BorderOne=styled.div`
/* border: white solid; */
background-color: #B29E84;
border-radius: 30px;
padding: 20px 20px 20px 20px;

`;
const BorderTwo=styled.div`
border: blue solid;
background-color :#3D3D3D ;
border-radius: 30px;
`;

const Topbar= styled.div`
border: black solid;
display: flex;
`;

const Logo=styled.div`
background-image: ;
border: red solid;
margin-right: 380px;
height: 100px;
`;

const Icon=styled.div`
border: green solid;

`;
const MiddleSection=styled.div`
display: flex;
`;

const Contents=styled.div`
border: coral solid ;
width: 90%;
`;
const KeepClear=styled.div`
border: greenyellow solid;

`;
const Socials=styled.div`
border: blue solid;

`;

// backgound image 
const Wrapper=styled.div`
border: red solid;
width: 300px;
`;


=======

export default App;
>>>>>>> 50a37296d783d2170244a4a4807084c48884c858
