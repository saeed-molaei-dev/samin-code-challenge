import React from "react";
import "./CartPage.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../Components/Cart/CartItem/CartItem";

function CartPage() {
  const { cartList, cartTotals } = useSelector((response) => {
    return response.cartState;
  });
  return (
    <div className="cart-page">
      {cartList.length === 0 ? (
        <p>هنوز محصولی برای خرید انتخاب نکرده اید!!!</p>
      ) : (
        cartList.map((itemData, index) => {
          return <CartItem data={itemData} key={index} />;
        })
      )}
      <div className="cart-page__footer">
        <span>مجموع قیمت: {cartTotals.totalPrice.toFixed(2)}</span>
        {cartList.length !== 0 && <Link to="/address">تکمیل سفارش</Link>}
      </div>
    </div>
  );
}

export default CartPage;
