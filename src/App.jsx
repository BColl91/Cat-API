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
  const [breedFacts, setBreedFacts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_DO94hgpUSYCxmgPfdoEM2Nj1K298EsCtTLVewqoH4mxkpvZi5NLOKVHORPcqm64P")

      if (!response.ok) {
        throw new Error("There is a problem!")
      }

      const catsData = await response.json()
      setAllCats(catsData)
      setErrorMsg("")
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  const fetchBreedFacts = async (breed_id) => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/v1/facts?limit=5&page=0&order=ASC&api_key=live_DO94hgpUSYCxmgPfdoEM2Nj1K298EsCtTLVewqoH4mxkpvZi5NLOKVHORPcqm64P`);

      if (!response.ok) {
        throw new Error("There is a problem fetching breed facts!");
      }

      const factsData = await response.json();
      setBreedFacts(factsData);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchBreedFacts('beng'); // replace 'beng' with the desired breed_id or logic to fetch multiple breeds
  }, []);

  return (
    <BrowserRouter>
      <h1>CATS 4 LYFE</h1>

      {errorMsg && <p>{errorMsg}</p>}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>

      <button onClick={() => setShowBasket(!showBasket)}>Basket ({basketItems.length})</button>

      {showBasket && <Basket basketItems={basketItems} setBasketItems={setBasketItems} closeBasket={() => setShowBasket(false)} />}

      <Routes>
        <Route path="/" element={<Home allCats={allCats} setBasketItems={setBasketItems} />} />
        <Route path="/About" element={<About breedFacts={breedFacts} />} />
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
          {/* <a href="LINK HERE" target="_blank" rel="noopener noreferrer">SAM GIT?</a>
          <a href="LINK HERE" target="_blank" rel="noopener noreferrer">CHRIS GIT?</a>
          <a href="https://github.com/BColl91" target="_blank" rel="noopener noreferrer">BEX GIT?</a> */}
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
