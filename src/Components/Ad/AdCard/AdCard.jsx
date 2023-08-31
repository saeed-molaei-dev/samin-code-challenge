import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BROKEN } from "../../../Constanst/Constanst.Const";
import { CgDollar } from "react-icons/cg";
import { BiSolidStarHalf } from "react-icons/bi";
import "./AdCard.scss";
function AdCard({ data }) {
  const [imgSrc, setImgSrc] = useState(data.image);
  return (
    <Link
      to={"/ad-detail/" + data.id}
      className="cc-ad-card"
      title={data.title}
    >
      <div className="cc-ad-card__image-holder">
        <img src={imgSrc} alt="undefind" onError={() => setImgSrc(BROKEN)} />
      </div>
      <p className="cc-ad-card__title">{data.title}</p>
      <p className="cc-ad-card__sub-title">
        {data.rating.count
          ? "موجودی " + data.rating.count + "عدد"
          : " اتمام موجودی"}
      </p>
      <div className="cc-ad-card__footer">
        <span>
          {data.price} <CgDollar className="icon-style" />
        </span>
        <span>
          {data.rating.rate} <BiSolidStarHalf className="icon-style" />
        </span>
      </div>
    </Link>
  );
}

export default AdCard;
