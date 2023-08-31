import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../../Cart/CartButton/CartButton";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <Link to="/">فروشگاه آزمایشی</Link>
      <div className="header__nav">
        <CartButton />
      </div>
    </div>
  );
}

export default Header;
