import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"; 
import "./ShowResults.scss";

function ShowResults() {
  const dispatch = useDispatch();
  return (
    <Link className="show-results">
      <Link
        to={"/"}
        className="show-results__back"
        onClick={() => {
          //   dispatch(ClearHistory());
        }}
      ></Link>
      <div className="show-results__wrapper">
        <div>
          <span>
            پرداخت با موفقیت انجام شد <br /> به زودی محصولات آماده ارسال می‌شوند{" "}
            <br /> از خرید شما سپاسگزاریم
          </span>
        </div>
        <div>برای رفتن به صفحه اصلی، روی صفحه کلید کنید</div>
      </div>
    </Link>
  );
}

export default ShowResults;
