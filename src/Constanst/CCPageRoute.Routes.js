import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import AdListPage from "../Pages/AdListPage/AdListPage";
import { Provider } from "react-redux";
import { mergedStore } from "../Store/merged/Merged.Store";
import AdDetail from "../Pages/AdDetail/AdDetail";
import { adListStore } from "../Store/Ad/AdList/AdList.Store";
import CartPage from "../Pages/CartPage/CartPage";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import ShowResults from "../Pages/ShowResults/ShowResults";

function CCPageRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={adListStore}>
            <AdListPage />
          </Provider>
        }
      />
      <Route
        path="/ad-detail/:id"
        element={
          <Provider store={mergedStore}>
            <AdDetail />
          </Provider>
        }
      />
      <Route
        path="/cart"
        element={
          <Provider store={mergedStore}>
            <CartPage />
          </Provider>
        }
      />
      <Route
        path="/address"
        element={
          <Provider store={mergedStore}>
            <PaymentPage />
          </Provider>
        }
      />
       <Route
        path="/show-results"
        element={
          <Provider store={mergedStore}>
            <ShowResults />
          </Provider>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default CCPageRoute;
