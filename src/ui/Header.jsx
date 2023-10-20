import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseMenuWhenNavigating() {
    if (isOpen) return setIsOpen(false);
  }

  return (
    <nav className="mb-10 mt-16 md:mb-20">
      <div className="items-center justify-between sm:flex">
        <div>
          <NavLink onClick={handleCloseMenuWhenNavigating} to="/">
            <img
              className="h-16 transition-all hover:scale-110 lg:h-24"
              src="../logo.png"
              alt="uby logo"
            />
          </NavLink>
        </div>

        <div
          onClick={() => setIsOpen((open) => !open)}
          className="absolute right-16 top-20 cursor-pointer text-4xl text-slate-700 sm:hidden"
        >
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
        <ul
          className={`absolute left-0 z-[1] w-full space-y-4 bg-slate-50 pl-12 text-lg font-bold transition-all duration-500 ease-in sm:static sm:z-auto sm:flex sm:w-auto sm:flex-row sm:space-x-7 sm:space-y-0 sm:pl-0 md:space-x-10 lg:text-2xl ${
            isOpen
              ? "top-36 opacity-100"
              : "top-[-480px] opacity-0 sm:opacity-100"
          }`}
        >
          <li className="hover:text-profile sm:transition-all sm:hover:scale-110">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sm:active-link text-profile" : ""
              }
              onClick={handleCloseMenuWhenNavigating}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-profile sm:transition-all sm:hover:scale-110">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sm:active-link text-profile" : ""
              }
              onClick={handleCloseMenuWhenNavigating}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="hover:text-profile sm:transition-all sm:hover:scale-110">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sm:active-link text-profile" : ""
              }
              onClick={handleCloseMenuWhenNavigating}
              to="/contact"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
