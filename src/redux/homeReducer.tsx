import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { ProductPropsType } from "../components/Product";

export interface HomeState {
  basket: ProductPropsType[];
  personalInfo: { email: string; password: string }[];
}

interface Account {
  email: string;
  password: string;
}

//? actions //

const addProduct = createAction<ProductPropsType>("ADD_TO_BASCKET");
const deleteFromCart = createAction<string>("DELETE_THIS_FROM_CART");
const addAccount = createAction<Account>("ADD_ACCOUNT");

export const actions = { addProduct, deleteFromCart, addAccount };

//? reducer //
export const homeReducer = createReducer<HomeState>(
  {
    basket: [],
    personalInfo: [],
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
    [addAccount.type]: ({ personalInfo }, action: PayloadAction<Account>) => {
      personalInfo.push(action.payload);
    },
  }
);
