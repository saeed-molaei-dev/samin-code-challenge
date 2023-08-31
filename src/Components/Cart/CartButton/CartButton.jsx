import React from "react";
import { Link } from "react-router-dom";
import "./CartButton.scss";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
function CartButton() {
  const { cartTotals } = useSelector((response) => response.cartState);
  return (
    <Link to="/cart" className="cart-button">
      <FaOpencart />
      <div className="cart-button__count">
        <span>{cartTotals.totalCount}</span>
      </div>
    </Link>
  );
}

export default CartButton;
