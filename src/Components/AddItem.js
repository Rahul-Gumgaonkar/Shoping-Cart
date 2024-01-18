import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/Slices/ProductSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addToCart } from "../Redux/Slices/AddToCartSlice";

function AddItem() {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: nanoid(10),
      text,
      quantity: 1,
    };
    dispatch(addItem(newItem)); // Add item to ProductReducer
    dispatch(addToCart(newItem.id)); // Add item to AddToCartReducer
  }

  return (
    <div className="addItem">
      <form onSubmit={handleSubmit}>
        <input
          className="itemInput"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button onSubmit={handleSubmit} className="itemButton">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;
