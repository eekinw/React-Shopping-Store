import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import Store from "./assets/components/Store";
import Cart from "./assets/components/Cart";
import NoMatch from "./assets/components/NoMatch";
import ProductDetails from "./assets/components/ProductDetails";

function App() {
  useEffect(() => {
    console.log("Component is mounted!");
    document.title = "React App";

    return () => {
      console.log("Unmounting this component!");
    };
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} index />
        <Route path="/store/:id" element={<ProductDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

// to create a nested route: path="/store/:id"
// useParams hook
