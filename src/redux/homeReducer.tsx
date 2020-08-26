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
    basket: [
      {
        id: serialGenerator(),
        title:
          "NEAT Worker Bee 카디오이드 솔리드 스테이트 콘덴서 마이크 팝 필터 및 쇼크 마운트 포함",
        price: 107788,
        rating: 4.3,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81WxpdqQSfL._AC_SY606_.jpg",
      },
      {
        id: serialGenerator(),
        title: "HP Elite X3 and Elite X3 Desk Dock (X9U42UT#ABA)",
        price: 230127,
        rating: 3.7,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91wVe75wrOL._AC_SX679_.jpg",
      },
    ],
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
