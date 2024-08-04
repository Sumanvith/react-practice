import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="text-3xl">
      <div className="shadow-2xl p-2">
        <ul className="flex justify-end">
          <li>
            <Link
              className={`mx-4 ${
                isActive("/") ? "bg-cyan-200" : "hover:text-red-500"
              }`}
              to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`mx-4 ${
                isActive("/hooks") ? "bg-cyan-200" : "hover:text-red-500"
              }`}
              to="/hooks">
              Hooks
            </Link>
          </li>
          <li>
            <Link
              className={`mx-4 ${
                isActive("/contact") ? "bg-cyan-200" : "hover:text-red-500"
              }`}
              to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`mx-4 ${
                isActive("/todo") ? "bg-cyan-200" : "hover:text-red-500"
              }`}
              to="/todo">
              TODO
            </Link>
          </li>
          <li>
            <Link
              className={`mx-4 ${
                isActive("/rockstarGames")
                  ? "bg-cyan-200"
                  : "hover:text-red-500"
              }`}
              to="/rockstarGames">
              Rockstar Games
            </Link>
          </li>
          <li>
            <Link
              className={`mx-4 ${
                isActive("/SignUp") ? "bg-cyan-200" : "hover:text-red-500"
              }`}
              to="/SignUp">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
