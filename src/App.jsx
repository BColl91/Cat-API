import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import About from "./pages/About";
import Home from "./pages/Home";
import Basket from './components/Basket';
import AboutCats from './pages/Aboutthecats';
import AboutUs from './pages/AboutUs'
import styled from 'styled-components';
import Dropdown1 from './components/Dropdown1';
import facebookIcon from './images/facebook.png';
import instagramIcon from './images/insta.png';
import twitterIcon from './images/xIcon.png';
import githubIcon from './images/github.png';
import phoneIcon from './images/phoneIcon.png';
import emailIcon from './images/emailIcon.png';

const App = () => {
  const [allCats, setAllCats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [basketItems, setBasketItems] = useState([]);
  const [showBasket, setShowBasket] = useState(false);
  const [breedDescriptions, setBreedDescriptions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=30&has_breeds=1&api_key=YOUR_API_KEY");
      if (!response.ok) {
        throw new Error("There is a problem!");
      }

      const catsData = await response.json();
      setAllCats(catsData.map(cat => ({
        ...cat,
        name: faker.person.firstName(),
        price: faker.finance.amount({ min: 50, max: 2000 })
      })));

      const breedsResponse = await fetch("https://api.thecatapi.com/v1/breeds?api_key=YOUR_API_KEY");
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
      <Body>
        <BorderOne>
          <BorderTwo>
            <Topbar>
              <Logo>
                <h1>CATS FOR LIFE</h1>
              </Logo>
              <Icon>
                <button onClick={() => setShowBasket(!showBasket)}>
                  Basket ({basketItems.length})
                </button>
                <div className="header">
                  <h1>CATS FOR LIFE</h1>
                  <div className="top-right">
                    <Dropdown1 />
                  </div>
                  <button className="basket-button" onClick={() => setShowBasket(!showBasket)}>
                    Basket ({basketItems.length})
                  </button>
                </div>
                <nav>
                  <Link to="/">Home</Link>
                  <Link to="/About">About</Link>
                  <Link to="/About-The-Cats">About Cats</Link>
                </nav>
              </Icon>
            </Topbar>
            <MiddleSection>
              <Contents>
                <Routes>
                  <Route path="/" element={<Home allCats={allCats} setBasketItems={setBasketItems} />} />
                  <Route path="/About" element={<About breedDescriptions={breedDescriptions} />} />
                  <Route path="/About-The-Cats" element={<AboutCats allCats={allCats} setBasketItems={setBasketItems} />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
              </Contents>
              <KeepClear></KeepClear>
            </MiddleSection>
            {errorMsg && <p>{errorMsg}</p>}
            {showBasket && <Basket basketItems={basketItems} setBasketItems={setBasketItems} closeBasket={() => setShowBasket(false)} />}
            <footer>
              <p>DISCLAIMER <br />
                This is a mock site created by Sam.H, Chris.C and Bex.C using react.</p>
              <Socials>
                <Wrapper>
                  <p><img src={emailIcon} alt="Email Icon" /><a href="mailto:contact@cats4lyfe.com">contact@cats4lyfe.com</a></p>
                  <p><img src={phoneIcon} alt="Phone Icon" />0151 123 1234</p>
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
                </Wrapper>
              </Socials>
            </footer>
          </BorderTwo>
        </BorderOne>
      </Body>
    </BrowserRouter>
  );
}

const Body = styled.div`
  background-color: #B29E84;
  border-radius: 30px;
  padding: 20px;
`;

const BorderOne = styled.div`
  background-color: #B29E84;
  border-radius: 30px;
  padding: 20px;
`;

const BorderTwo = styled.div`
  background-color: #3D3D3D;
  border-radius: 30px;
  padding: 20px;
`;

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  h1 {
    color: white;
  }
`;

const Icon = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-right {
    display: flex;
    align-items: center;
  }
  .basket-button {
    margin-left: 20px;
  }
  nav {
    display: flex;
    gap: 20px;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;

const MiddleSection = styled.div`
  display: flex;
`;

const Contents = styled.div`
  width: 90%;
`;

const KeepClear = styled.div`
`;

const Socials = styled.div`
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default App;
