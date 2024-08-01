import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Basket from './components/Basket'

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
      setAllCats(catsData);

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
        <p>Contact us at: <a href="mailto:contact@cats4lyfe.com">contact@cats4lyfe.com</a></p>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          {/* <a href="https://github.com/SHilditch4177" target="_blank" rel="noopener noreferrer">SAM GitHub (ARE YOU COOL WITH THIS LINK SAM??<3)</a>
          <a href="https://github.com/ChrisCCodenation" target="_blank" rel="noopener noreferrer">CHRIS GitHub</a>
          <a href="https://github.com/BColl91" target="_blank" rel="noopener noreferrer">BEX GitHub</a> */}
        </div>
      </footer>
    </BrowserRouter>
  );
}
export default App