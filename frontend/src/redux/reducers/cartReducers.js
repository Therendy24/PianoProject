import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //in our action.payload are the items we would like to add
      const item = action.payload;

      //   if the item already exists it will return in (existItem)
      // item.product represents the item in the cartItems array in the state
     
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          // spread the state of the cart
          //go the cart items and set it to a new cart items array, map through each item in the array
          //  check where the current item is mapping to is equal to the existing item
          //if its true it will set that  equal to the new item with the payload else it equal to the current item it is mapping through
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        //action.payload  are the items in the REMOVE_FROM_CART
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
