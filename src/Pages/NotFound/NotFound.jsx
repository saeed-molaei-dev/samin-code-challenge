import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <Link to={"/"} className="not-found">
      <div>
        <span>ظاهرا صفحه اشتباهی رو باز کردید :)</span>
        <span>با یک کلید ساده به صفحه اصلی بروید</span>
      </div>
    </Link>
  );
}

export default NotFound;
