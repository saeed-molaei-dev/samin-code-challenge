/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CgDollar } from "react-icons/cg";
import { GetAdDetail } from "../../Store/Ad/AdDetail/AdDetail.Action";
import { BROKEN } from "../../Constanst/Constanst.Const";
import CCAdvancedButton from "../../Components/Global/Buttons/CCAdvancedButton/CCAdvancedButton";
import CCButton from "../../Components/Global/Buttons/CCButton/CCButton";
import AddToCart, {
  DecreaseQty,
  DeleteItem,
  IncreaseQty,
} from "../../Store/Cart/Cart.Action";
import "./AdDetail.scss";
import { MdCategory } from "react-icons/md";

function AdDetail() {
  const { id } = useParams();
  const mergedDispatch = useDispatch();
  const { adDetailState, cartState } = useSelector((response) => response);
  const { adDetailList } = adDetailState;
  const { cartList } = cartState;
  let product = null;
  const [loadData, setloadData] = useState(true);
  useEffect(() => {
    if (loadData) {
      mergedDispatch(GetAdDetail(id));
      setloadData(false);
    }
  }, [loadData]);
  function HandleAddToCart() {
    mergedDispatch(AddToCart(adDetailList));
  }
  function GetProductFromCart() {
    cartList.forEach((cartProduct) => {
      if (cartProduct.id == id) {
        product = cartProduct;
      }
    });
    return product;
  }
  function QtyPlus() {
    mergedDispatch(IncreaseQty(id));
  }
  function QtyMinus() {
    mergedDispatch(DecreaseQty(id));
  }
  function HandleDelete() {
    mergedDispatch(DeleteItem(id));
  }

  return (
    <div className="cc-ad-detail">
      <div className="cc-ad-detail__header">
        <div className="cc-ad-detail__image-holder">
          <img
            src={adDetailList.image}
            alt={adDetailList.title}
            onError={(event) => (event.target.src = BROKEN)}
          />
        </div>
        <div className="cc-ad-detail__detail-holder">
          <div className="cc-ad-detail__detail cc-ad-detail__detail--full-width">
            <span
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              نام: {adDetailList.title}
            </span>
          </div>
          <div className="cc-ad-detail__detail">
            <span>دسته بندی: {adDetailList.category}</span>
            <span>
              <MdCategory />
            </span>
          </div>
          <div className="cc-ad-detail__detail">
            <span> قیمت: {adDetailList.price}</span>
            <span>
              <CgDollar />
            </span>
          </div>
        </div>
      </div>
      <p className="cc-ad-detail__description">
        توضیحات: {adDetailList.description}
      </p>
      {GetProductFromCart() ? (
        <CCAdvancedButton
          count={product.qty}
          onPlus={QtyPlus}
          onMinus={QtyMinus}
          onDeleted={HandleDelete}
        />
      ) : (
        <CCButton
          testId={"addtocart"}
          text={"افزودن به لیست خرید"}
          disabled={false}
          click={HandleAddToCart}
        />
      )}
    </div>
  );
}

export default AdDetail;
