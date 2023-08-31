/* eslint-disable eqeqeq */
import {
  CARTADDTOSATATE,
  CARTDELETESATATE,
  CARTMINUSSATATE,
  CARTPLUSSATATE,
  LOCALSTORAGECARTLIST,
  LOCALSTORAGETOTALS,
} from "../../Constanst/Constanst.Const";

export default function AddToCart(productData) {
  return async (dispatch, getState) => {
    const { cartState } = getState();
    if (isDuplicate(cartState.cartList, productData.id)) {
      return;
    }
    productData.qty = 1;
    cartState.cartList.push(productData);
    AddToLocalStorage(cartState.cartList);
    dispatch({
      type: CARTADDTOSATATE,
      payload: {
        cartLoading: false,
        cartList: cartState.cartList,
        cartError: "",
        cartTotals: makeTotals(cartState.cartList),
      },
    });
  };
}

export function IncreaseQty(id) {
  return async (dispatch, getState) => {
    const { cartState } = getState();
    cartState.cartList.forEach((data) => {
      if (data.id == id) {
        ++data.qty;
      }
    });
    AddToLocalStorage(cartState.cartList);
    dispatch({
      type: CARTPLUSSATATE,
      payload: {
        cartLoading: false,
        cartList: cartState.cartList,
        cartError: "",
        cartTotals: makeTotals(cartState.cartList),
      },
    });
  };
}
export function DecreaseQty(id) {
  return async (dispatch, getState) => {
    const { cartState } = getState();
    cartState.cartList.forEach((data) => {
      if (data.id == id && data.qty > 1) {
        --data.qty;
      }
    });
    AddToLocalStorage(cartState.cartList);
    dispatch({
      type: CARTMINUSSATATE,
      payload: {
        cartLoading: false,
        cartList: cartState.cartList,
        cartError: "",
        cartTotals: makeTotals(cartState.cartList),
      },
    });
  };
}
export function DeleteItem(id) {
  return async (dispatch, getState) => {
    const { cartState } = getState();
    cartState.cartList.forEach((data, index) => {
      if (data.id == id) {
        cartState.cartList.splice(index, 1);
      }
    });
    AddToLocalStorage(cartState.cartList);
    dispatch({
      type: CARTDELETESATATE,
      payload: {
        cartLoading: false,
        cartList: cartState.cartList,
        cartError: "",
        cartTotals: makeTotals(cartState.cartList),
      },
    });
  };
}

export function isDuplicate(cartList, productId) {
  let productDuplicate = false;
  cartList.forEach((cartProduct) => {
    if (cartProduct.id === productId) {
      productDuplicate = true;
    }
  });
  return productDuplicate;
}

export function ClearCart() {
  return async (dispatch, getState) => {
    AddToLocalStorage("");
    dispatch({
      type: CARTDELETESATATE,
      payload: {
        cartLoading: false,
        cartList: [],
        cartError: "",
        cartTotals: { totalCount: 0, totalPrice: 0 },
      },
    });
  };
}

function AddToLocalStorage(cartList) {
  localStorage.setItem(LOCALSTORAGECARTLIST, JSON.stringify(cartList));
}
function makeTotals(cartList) {
  let total = { totalCount: 0, totalPrice: 0 };
  cartList.forEach((data) => {
    total.totalCount += data.qty;
    total.totalPrice += data.price * data.qty;
  });
  saveTotals(total);
  return total;
}

function saveTotals(totals) {
  localStorage.setItem(LOCALSTORAGETOTALS, JSON.stringify(totals));
}
