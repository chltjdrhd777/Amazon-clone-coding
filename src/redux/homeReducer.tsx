import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { ProductPropsType } from "../components/Product";

export interface HomeState {
  basket: ProductPropsType[];
}

//? actions //

const addProduct = createAction<ProductPropsType>("ADD_TO_BASCKET");
const deleteFromCart = createAction<string>("DELETE_THIS_FROM_CART");

export const actions = { addProduct, deleteFromCart };

//? reducer //
function serialGenerator() {
  const serialMaterilas = Math.random().toString(16);
  const randomSerials = `${serialMaterilas.substr(
    2,
    5
  )}-${serialMaterilas.substr(2, 3)}-${serialMaterilas.substr(3, 5)}`;
  return randomSerials;
}
export const homeReducer = createReducer<HomeState>(
  {
    basket: [],
  }, //state structure
  {
    [addProduct.type]: (
      { basket },
      action: PayloadAction<ProductPropsType>
    ) => {
      basket.push(action.payload);
    },
    [deleteFromCart.type]: ({ basket }, action: PayloadAction<string>) => {
      const findIndex = basket.findIndex((el) => el.id === action.payload);
      if (findIndex !== -1) {
        basket.splice(findIndex, 1);
      }
    },
  }
);
