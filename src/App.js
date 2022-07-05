import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";

function App() {
  const [displayItems, setDisplayItems] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6534524e68msh94d393a66a0edb0p1220bdjsn4a112fee9c13",
      "X-RapidAPI-Host": "amazon-products1.p.rapidapi.com",
    },
  };

  useEffect(() => {
      fetch(
      "https://amazon-products1.p.rapidapi.com/bestseller?country=US&categoryId=165793011",
      options
    )
      .then((promise) => promise.json())
      .then(( { results } ) => {
        
        setDisplayItems([...results])
        
      }).catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Make your choice" items={displayItems} />
      <Feature/>
    </Router>
  );
}

export default App;
