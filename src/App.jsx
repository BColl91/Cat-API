import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import order from "./pages/order"
import orderconf from "./pages/ordercomf"
import About from"./pages/About"

const App = () => {
  const [allCats, setAllCats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_DO94hgpUSYCxmgPfdoEM2Nj1K298EsCtTLVewqoH4mxkpvZi5NLOKVHORPcqm64P")

      console.log(response)
      if(!response.ok) {
        throw new Error("There is a problem!")
      }

      const catsData = await response.json()
      setAllcats(catsData)
      setErrorMsg("")
    } catch (error) {
      console.log(error.message)
      setErrorMsg(error.message)
    }

  }
  useEffect(() =>{
    fetchData()
  }, [])

  return (
    <>
      <h1>CATS 4 LYFE</h1>

      {errorMsg !== "" && (
        <p>{errorMsg}</p>
      )}

      {allcats.map((cat, index) =>{

return (
  <BrowserRouter>
  <h1>React Router</h1>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
  </nav>
  <h3 key ={index}>{cat}</h3>

  <Routes>
    <Route path="/" element={ <Home/> }></Route>
    <Route path="/About" element={ <About/> }></Route>
       <Route path="/:productName" element={ <Product/> }></Route>
  </Routes>

  <footer>
  <Route path="/Contact" element={ <Contact/> }></Route>
  <p>DISCLAIMER <br />
  This is a mock site created by Sam.H, Chris.C and Bex.C using react.</p>
  <h3>SOCIALS</h3>
  </footer>
</BrowserRouter>
)
      })}
    </>
  )
}

export default App
