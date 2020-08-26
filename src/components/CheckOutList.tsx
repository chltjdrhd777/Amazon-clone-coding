import React from "react";
import { ProductPropsType } from "./Product";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { actions } from "../redux/homeReducer";
import { priceComma } from "../server/productInformation";

function CheckOutList({ id, title, price, imageUrl }: ProductPropsType) {
  const distpatch = useDispatch();

  const removeThis = (id: string) => {
    distpatch(actions.deleteFromCart(id));
  };

  return (
    <ProductsDiv>
      <div className="ProductImageCSS">
        <img src={imageUrl} alt="product" />
      </div>

      <ProductInfoDiv>
        <p>{title}</p>
        <OnlyForStylingDiv>
          <div>KRW {priceComma(price!)}</div>
          <DeleteBtn onClick={() => removeThis(id!)}>
            Remove this from your cart
          </DeleteBtn>
        </OnlyForStylingDiv>
      </ProductInfoDiv>
    </ProductsDiv>
  );
}

const ProductsDiv = styled.div`
  display: flex;
  position: relative;
  & .ProductImageCSS {
    width: 150px;
    height: 150px;
    display: grid;
    place-items: center;
  }

  & p {
    font-size: 12px;
  }
  & img {
    height: 100px;
  }
`;
const ProductInfoDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  margin-bottom: 15px;
`;
const OnlyForStylingDiv = styled.div`
  margin-top: 15px;
`;
const DeleteBtn = styled.button``;

export default CheckOutList;
