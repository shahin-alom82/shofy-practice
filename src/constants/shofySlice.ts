

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { ProductType } from "./type";

interface InitialState {
      cart: ProductType[];
      userInfo: any;
}

const initialState: InitialState = {
      cart: [],
      userInfo: null,
};

export const shofySlice = createSlice({
      name: "shofy",
      initialState,
      reducers: {
            addToCart: (state, action) => {
                  const addCart = state.cart.find((item) => item.id === action.payload.id);
                  if (addCart) {
                        toast.error("Already product added!");
                        // @ts-ignore
                        addCart.quantity! += 1;
                  } else {
                        state.cart.push({ ...action.payload, quantity: 1 });
                        toast.success("Product added successfully!");
                  }
            },
            // increaseQuantity
            increaseQuantity: (state, action) => {
                  const addCart = state.cart.find((item) => item.id === action.payload);
                  if (addCart) {
                        // @ts-ignore
                        addCart.quantity! += 1;
                  }
            },
            decreaseQuantity: (state, action) => {
                  const minusProduct = state.cart.find(
                        (item) => item?.id === action?.payload
                  );
                  if (minusProduct) {
                        // @ts-ignore
                        minusProduct.quantity! -= 1;
                  }
            },


            addToUser: (state, action) => {
                  state.userInfo = action.payload;
            },

            removeUser: (state) => {
                  state.userInfo = null;
            },
      },
});

export const { addToCart, addToUser, removeUser, increaseQuantity, decreaseQuantity } = shofySlice.actions;
export default shofySlice.reducer;
