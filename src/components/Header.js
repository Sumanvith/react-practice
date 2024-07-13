import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-3xl">
      <div className="shadow-2xl p-2">
        <ul className="flex justify-between">
          <li>
            <Link className="mx-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="mx-4" to="hooks">
              Hooks
            </Link>
          </li>
          <li>
            <Link className="mx-4" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
