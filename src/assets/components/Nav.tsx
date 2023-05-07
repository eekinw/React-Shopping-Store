import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="z-10 top-0 left-0 right-0 bg-black text-white p-2 flex justify-between items-center">
        <div className="w-16 h-16">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmB6UiMvUHaTDoeG8IGk69w8XSWqSjQj3Ouz68noo&s"
            alt=""
          />
        </div>

        <div className="flex p-2 gap-5">
          <NavLink
            to="/"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "white",
                fontSize: isActive ? "large" : "",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/store"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "white",
                fontSize: isActive ? "large" : "",
              };
            }}
          >
            Store
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "" : "white",
                fontSize: isActive ? "large" : "",
              };
            }}
          >
            Cart
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
