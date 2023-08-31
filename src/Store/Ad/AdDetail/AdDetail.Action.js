import axios from "axios";
import {
  ADDETAILFAILEDSTATE,
  ADDETAILLOADINGSTATE,
  ADDETAILSTATE,
} from "../../../Constanst/Constanst.Const";

export function GetAdDetail(id) {
  return async (dispatch) => {
    dispatch({
      type: ADDETAILLOADINGSTATE,
      payload: { adDetailLoading: true, adDetailList: {}, adDetailError: "" },
    });
    await axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => {
        dispatch({
          type: ADDETAILSTATE,
          payload: {
            adDetailLoading: false,
            adDetailList: response.data,
            adDetailError: "",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADDETAILFAILEDSTATE,
          payload: {
            adDetailLoading: false,
            adDetailList: {},
            adDetailError: error.message,
          },
        });
      });
  };
}
