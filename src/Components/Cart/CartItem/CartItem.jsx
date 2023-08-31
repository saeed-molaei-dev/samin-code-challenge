import React from "react";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import {
  DecreaseQty,
  DeleteItem,
  IncreaseQty,
} from "../../../Store/Cart/Cart.Action";
import { BROKEN } from "../../../Constanst/Constanst.Const";
import CCAdvancedButton from "../../Global/Buttons/CCAdvancedButton/CCAdvancedButton";

function CartItem({ data }) {
  const mergedDispatch = useDispatch();
  function QtyPlus() {
    mergedDispatch(IncreaseQty(data.id));
  }

  function QtyMinus() {
    mergedDispatch(DecreaseQty(data.id));
  }
  function HandleDelete() {
    mergedDispatch(DeleteItem(data.id));
  }
  return (
    <div className="cart-item">
      <div className="cart-item__content-wrapper">
        <div className="cart-item__image-wrapper">
          <img
            src={data.image}
            alt={data.title}
            onError={(event) => (event.target.src = BROKEN)}
          />
        </div>
        <p className="cart-item__title">{data.title}</p>
      </div>
      <div className="cart-item__action-wrapper">
        <span className="cart-item__price">{data.price}</span>
        <CCAdvancedButton
          count={data.qty}
          onPlus={QtyPlus}
          onMinus={QtyMinus}
          onDeleted={HandleDelete}
        />
      </div>
    </div>
  );
}

export default CartItem;
