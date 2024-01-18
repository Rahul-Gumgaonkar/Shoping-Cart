import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  remove,
} from "../Redux/Slices/AddToCartSlice";
import { removeItem } from "../Redux/Slices/ProductSlice";

function SingleProduct({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.AddToCartReducer.cart);
  const curItem = cart.find((cartItem) => cartItem.id === item.id);
  const currQuantity = curItem ? curItem.quantity : 0;

  return (
    <div className="product">
      <div className="left">
        <h3>{item.text}</h3>
        <button
          onClick={() => dispatch(addToCart(item.id))}
          className="productBtn"
        >
          +
        </button>

        <h3>{currQuantity}</h3>
        <button
          className="productBtn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          -
        </button>
        <button
          style={{ backgroundColor: "violet", padding: "8px 10px" }}
          onClick={() =>
            dispatch(removeItem(item.id), dispatch(remove(item.id)))
          }
        >
          Remove
        </button>
      </div>
      <h3>Rs.40</h3>
    </div>
  );
}

export default SingleProduct;
