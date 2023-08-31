import axios from "axios";
import {
  ADLISTFAILEDSTATE,
  ADLISTLOADINGSTATE,
  ADLISTSTATE,
} from "../../../Constanst/Constanst.Const";

export function GetAdList() {
  return async (dispatch) => {
    dispatch({
      type: ADLISTLOADINGSTATE,
      payload: {
        adListLoading: true,
        adList: [],
        sortedAdList: [],
        searchAdList: [],
        adListFailed: "",
      },
    });
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch({
          type: ADLISTSTATE,
          payload: {
            adListLoading: false,
            adList: response.data,
            sortedAdList: response.data,
            searchAdList: [],
            adListFailed: "",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADLISTFAILEDSTATE,
          payload: {
            adListLoading: false,
            adList: [],
            sortedAdList: [],
            searchAdList: [],
            adListFailed: error.message,
          },
        });
      });
  };
}

export function HandelSort(items) {
  return async (dispatch, getState) => {
    const { adList } = getState().adListState;
    let sorted = [];
    if (items === "all") {
      sorted = adList;
    } else {
      adList.forEach((element) => {
        if (element.category === items) {
          sorted.push(element);
        }
      });
    }
    dispatch({
      type: ADLISTSTATE,
      payload: {
        adListLoading: false,
        adList: adList,
        sortedAdList: sorted,
        searchAdList: [],
        adListFailed: "",
      },
    });
  };
}

export function SearchCheck(searchValue) {
  return async (dispatch, getState) => {
    const { adList } = getState().adListState;
    let searchText;
    let searchData;
    searchText = searchValue.toLowerCase();
    let searchList = adList.filter((item) => {
      if (searchText === "" || searchText.length <= 2) {
        searchData = adList;
        return item;
      } else {
        return item.title.toLowerCase().includes(searchValue);
      }
    });
    searchData = searchList;
    dispatch({
      type: ADLISTSTATE,
      payload: {
        adListLoading: false,
        adList: adList,
        sortedAdList: searchData,
        searchAdList: searchData,
        adListFailed: "",
      },
    });
  };
}
