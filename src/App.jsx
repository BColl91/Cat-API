import './App.css'
import { useState, useEffect } from 'react'

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
    <Link to="/Contact">Contact</Link>
  </nav>
  <h3 key ={index}>{cat}</h3>
  <Routes>
    <Route path="/" element={ <Home/> }></Route>
    <Route path="/About" element={ <About/> }></Route>
    <Route path="/Contact" element={ <Contact/> }></Route>
    <Route path="/:productName" element={ <Product/> }></Route>
  </Routes>

  <footer>
    <h2>This is my footer</h2>
  </footer>
</BrowserRouter>
)
      })}
    </>
  )
}

export default App
