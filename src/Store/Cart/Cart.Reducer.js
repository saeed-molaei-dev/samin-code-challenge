import {
  CARTADDTOSATATE,
  CARTDELETESATATE,
  CARTMINUSSATATE,
  CARTPLUSSATATE,
  LOCALSTORAGECARTLIST,
  LOCALSTORAGETOTALS,
} from "../../Constanst/Constanst.Const";

export default function CartReducer(
  cartState = {
    cartLoading: false,
    cartList: CartListInitState(),
    cartError: "",
    cartTotals: totalsInitState(),
  },
  { type, payload },
) {
  switch (type) {
    case CARTADDTOSATATE:
      return payload;
    case CARTPLUSSATATE:
      return payload;
    case CARTMINUSSATATE:
      return payload;
    case CARTDELETESATATE:
      return payload;
    default:
      return cartState;
  }
}
function CartListInitState() {
  let initState = [];
  if (localStorage.getItem(LOCALSTORAGECARTLIST)) {
    initState = JSON.parse(localStorage.getItem(LOCALSTORAGECARTLIST));
  }
  return initState;
}

function totalsInitState() {
  let initState = { totalCount: 0, totalPrice: 0 };
  let storedTotals = JSON.parse(localStorage.getItem(LOCALSTORAGETOTALS));
  if (storedTotals) {
    initState = storedTotals;
  }
  return initState;
}
