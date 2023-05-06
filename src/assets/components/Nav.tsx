import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="z-10 top-0 left-0 right-0 bg-black text-white p-2 flex justify-between items-center">
        <div className="w-16 h-16">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmB6UiMvUHaTDoeG8IGk69w8XSWqSjQj3Ouz68noo&s"
            alt=""
          />
        </div>

        <div className="flex p-2 gap-5">
          <NavLink className="hover:text-cyan-400" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-cyan-400" to="/store">
            Store
          </NavLink>
          <NavLink className="hover:text-cyan-400" to="/cart">
            Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
