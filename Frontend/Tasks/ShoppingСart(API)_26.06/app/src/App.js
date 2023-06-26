import { ProductsList } from "./Components/ProductsList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    (async () => {
      const respons = await fetch(url);
      const data = await respons.json();
      setState(data.products);
    })()
  }, []);

  const [state, setState] = useState([]);

  const deletProduct = (delId) => {
    setState(state.filter(({id})=> id !== delId))
  }
  return (
    <div className="App">
      <ProductsList state={state} deletProduct={deletProduct}/>
    </div>
  );
}

export default App;
