import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { faker } from '@faker-js/faker'

import About from "./pages/About"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Basket from './components/Basket'

import facebookIcon from './images/facebook.png'
import instagramIcon from './images/insta.png'
import twitterIcon from './images/xIcon.png'
import githubIcon from './images/github.png'
import phoneIcon from './images/phoneIcon.png'
import emailIcon from './images/emailIcon.png'


const App = () => {
  const [allCats, setAllCats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [basketItems, setBasketItems] = useState([]);
  const [showBasket, setShowBasket] = useState(false);
  const [breedDescriptions, setBreedDescriptions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=30&has_breeds=1&api_key=live_DO94hgpUSYCxmgPfdoEM2Nj1K298EsCtTLVewqoH4mxkpvZi5NLOKVHORPcqm64P")

      if (!response.ok) {
        throw new Error("There is a problem!")
      }

      const catsData = await response.json();
      setAllCats(catsData.map(cat => ({
        ...cat,
        name: faker.person.firstName(),
        price: parseFloat(faker.finance.amount(50, 2000, 2))
      })));

      // Fetch breed descriptions
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
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="header">
        <h1>CATS FOR LIFE</h1>
        <button className="basket-button" onClick={() => setShowBasket(!showBasket)}>
          Basket ({basketItems.length})
        </button>
      </div>

      {errorMsg && <p>{errorMsg}</p>}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>

      {showBasket && <Basket basketItems={basketItems} setBasketItems={setBasketItems} closeBasket={() => setShowBasket(false)} />}

      <Routes>
        <Route path="/" element={<Home allCats={allCats} setBasketItems={setBasketItems} />} />
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
    </BrowserRouter>
  );
}
export default App;
