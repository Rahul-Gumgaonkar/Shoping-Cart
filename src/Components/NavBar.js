import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

function NavBar() {
  const cart = useSelector((state) => state.AddToCartReducer.cart);
  let count = 0;
  let TotalSum = 0;
  cart.forEach((item) => (count += item.quantity));
  TotalSum = count * 40;

  return (
    <div className="navBar">
      <h1>Shoping Cart</h1>
      <div className="right">
        <h3>Total Quantity : {count}</h3>
        <h3>Total Amount : {TotalSum}</h3>
      </div>
    </div>
  );
}

export default NavBar;
