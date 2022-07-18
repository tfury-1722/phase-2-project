import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";

function App() {
  // const [displayItems, setDisplayItems] = useState([]);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "6534524e68msh94d393a66a0edb0p1220bdjsn4a112fee9c13",
  //     "X-RapidAPI-Host": "amazon-products1.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //     fetch(
  //     "https://amazon-products1.p.rapidapi.com/bestseller?country=US&categoryId=165793011",
  //     options
  //   )
  //     .then((promise) => promise.json())
  //     .then(( { results } ) => {
  //       console.log(results)
  //       setDisplayItems([...results])

  //     }).catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:8000/trending', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(promise => promise.json())
  //   .then(( trending ) => {
  //     setDisplayItems([...trending].slice(0,3))
  //   })
  //   .catch((err) => console.error(err));
  // }, [])

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const data = {
    title,
    author
  }

const handlePost = () => {
  fetch('http://localhost:8000/post', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(setTitle(data))
  })
}

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route
            path="/products"
            element={<Products heading="Make your choice" />}
          />
          <Route path="/deals" element={<Feature onSubmit={() => {
            handlePost
            setAuthor(e.target.value)
            }} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
