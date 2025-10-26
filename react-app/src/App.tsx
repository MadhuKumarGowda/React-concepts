// App.tsx
// Main entry point of the React application.

import { useState } from "react";
import StateHook from "./components/StateHook";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Form from "./components/Form";
function App() {
  const [product, setProduct] = useState(["Product1", "Product2", "Product3"]);
  const handleReset = () => {
    setProduct([]);
  };
  return (
    <>
      <h2>Understanding The State Hook</h2>
      <StateHook />
      <br />
      <hr />
      <h3> Passing state between components</h3>
      <Navbar productsCount={product.length} />
      <Product productItems={product} onClear={handleReset} />
      <Form />
    </>
  );
}

export default App;
