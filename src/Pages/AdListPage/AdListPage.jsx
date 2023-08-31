/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdCard from "../../Components/Ad/AdCard/AdCard";
import "./AdListPage.scss";
import { GetAdList } from "../../Store/Ad/AdList/AdList.Action";
import Carousel from "../../Components/Ad/Carousel/Carousel";
import { Pagination } from "react-bootstrap";
import AdSearchBar from "../../Components/Ad/AdSearchBar/AdSearchBar";
import ReactPaginate from "react-paginate";

function AdListPage() {
  const [page, setPage] = useState(1);
  const adDispatch = useDispatch();
  const { adListLoading, sortedAdList, adList } = useSelector(
    (response) => response.adListState,
  );
  useEffect(() => {
    if (!adListLoading && adList.length === 0) adDispatch(GetAdList());
  });

  const paginat = useMemo(() => {
    const help = [];
    for (let index = 0; index < sortedAdList.length / 9; index++) {
      help.push(index + 1);
    }
    return help;
  }, [sortedAdList]);
  return (
    <div className="ad-page">
      <Carousel />
      <div className="ad-page__search-wrapper">
        <AdSearchBar
          itemList={adList}
          setSortData={sortedAdList}
          setPage={setPage}
        />
      </div>
      <div className="ad-page__item-wrapper">
        {sortedAdList.slice((page - 1) * 9, page * 9).map((item) => {
          return <AdCard key={item.id} data={item} />;
        })}
      </div>{" "}
      <Pagination>
        <Pagination.First onClick={() => setPage(1)} />
        <Pagination.Prev
          onClick={() =>
            page > 1 ? setPage((page) => page - 1) : window.scrollTo({ top: 0 })
          }
        />
        {paginat.map((item, index) => (
          <Pagination.Item
            active={page === item}
            onClick={() => setPage(index + 1)}
            key={index}
          >
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            page < sortedAdList.length / 9 && setPage((page) => page + 1)
          }
        />
        <Pagination.Last onClick={() => setPage(sortedAdList.length / 9)} />
      </Pagination>
    </div>
  );
}

export default AdListPage;
