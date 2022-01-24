import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";


const CartItem = ({ item, qtyChangeHandler, removeHandler}) => {

  
  return (
    <div className="cartitem">
      {/* -----------------  Image ------------------------- */}
      <div className="cartitem__image">
        <img src={item.imageUrl} alt="product name" />
      </div>
      {/* -------------------- Name of Product ----------------------- */}
      <p className="cartitem__name">
        <p> {item.name}</p>
      </p>
      {/* ----------------- Price of Product-------------------------- */}

      <p className='"cartitem__price'> ${item.price} </p>

      {/* ----------------  The quanity box ---------------------------- */}
      {/* <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.id, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select> */}

      <p> Qty: {item.qty}</p>
      
      {/* ------------------ Trash button -------------------------- */}

      <button
        className="cartitem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
