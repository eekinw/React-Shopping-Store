import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div>Store</div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </>
  );
};

export default Store;
