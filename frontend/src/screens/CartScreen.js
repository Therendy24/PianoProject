import React from "react";
import "./CartScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components
import CartItem from "../Components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  
  const dispatch = useDispatch();

  //get the cart from the state
  const cart = useSelector((state) => state.cart);
  //destructure
  const { cartItems } = cart;

  useEffect(() => {}, []);

  //------------------------------------
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  //--------------------------------
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  //--------------------------------
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  return (
    <>
    <div className="cartscreen">
    <div className="cartscreen__left">
      <h2>Shopping Cart</h2>

      {/* -------------------------------- */}
  
      {cartItems.length === 0 ? (
        <div>
          Your Cart Is Empty <Link to="/">Go Back</Link>
        </div>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.product}
            item={item}
            qtyChangeHandler={qtyChangeHandler}
            removeHandler={removeFromCartHandler}
          />
        ))
      )}
    </div>
      {/* -------------------------------- */}
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items </p>
          <p>${getCartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed To Checkout </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartScreen;
