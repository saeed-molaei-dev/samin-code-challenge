import React, { useState } from "react";
import "./AdSearchBar.scss";
import { useDispatch } from "react-redux";
import {
  HandelSort,
  SearchCheck,
} from "../../../Store/Ad/AdList/AdList.Action";
function AdSearchBar({ setPage }) {
  const dispach = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="search-box">
      <div>
        <input
          className="search-box__input"
          onChange={(inputText) => {
            setSearchValue(inputText.target.value);
          }}
          type="text"
          value={searchValue}
        />
        <button
          onClick={() => {
            dispach(SearchCheck(searchValue));
          }}
        >
          جستجو
        </button>
      </div>
      <select
        onChange={(item) => {
          dispach(HandelSort(item.target.value));
          setSearchValue("");
          setPage(1);
        }}
        name="selectList"
        id="selectList"
      >
        <option value="all">همه</option>
        <option value="jewelery">جواهرات</option>
        <option value="women's clothing">لباس زنانه</option>
        <option value="electronics">وسایل الکترونیکی</option>
        <option value="men's clothing">لباس مردانه</option>
      </select>
    </div>
  );
}

export default AdSearchBar;
