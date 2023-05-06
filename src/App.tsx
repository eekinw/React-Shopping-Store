import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import Store from "./assets/components/Store";
import Cart from "./assets/components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
