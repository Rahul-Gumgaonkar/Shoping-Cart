import React from "react";
import SingleProduct from "./SingleProduct";
import "./style.css";
import { useSelector } from "react-redux";

function ShowItem() {
  const Item = useSelector((state) => state.ProductReducer.Item);
  return (
    <div className="showItem">
      <h3>Your Items</h3>
      {Item.map((item) => {
        return <SingleProduct item={item} />;
      })}
    </div>
  );
}

export default ShowItem;
