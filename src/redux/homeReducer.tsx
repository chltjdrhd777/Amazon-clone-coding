import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { ProductPropsType } from "../components/Product";

export interface HomeState {
  basket: any[];
}

//? actions //

const addProduct = createAction<ProductPropsType>("ADD_TO_BASCKET");

export const actions = { addProduct };

//? reducer //
export const homeReducer = createReducer<HomeState>(
  { basket: [] }, //state structure
  {
    [addProduct.type]: (
      { basket },
      action: PayloadAction<ProductPropsType>
    ) => {
      basket.push(action.payload);
    },
  }
);
