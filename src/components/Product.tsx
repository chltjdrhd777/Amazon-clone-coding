import React from "react";
import styled from "styled-components";
import Emoju from "a11y-react-emoji";

export interface ProductPropsType {
  id?: string;
  title?: string;
  price?: string;
  rating?: number;
  imageUrl?: string;
}

function Product({ id, title, price, rating, imageUrl }: ProductPropsType) {
  return (
    <ContainerDiv>
      <ProductInfoDiv>
        <p>{title}</p>
        <PriceP>
          <small>KRW</small>
          <strong>{price}</strong>
        </PriceP>
        <RatingDiv>
          {Array(rating)
            .fill(undefined)
            .map((_) => (
              <Emoju
                symbol="🤫"
                key={Math.random()}
                style={{ fontSize: "10px" }}
              />
            ))}
        </RatingDiv>
      </ProductInfoDiv>

      <img src={imageUrl} alt="ProductImg" />
      <AddCartBtn>Add to your cart</AddCartBtn>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  margin: 10px;
  padding: 20px;
  width: 100%;
  z-index: 1;

  & img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 15px;
  }
`;
const ProductInfoDiv = styled.div`
  height: 100px;
  margin-bottom: 15px;
`;
const PriceP = styled.p`
  margin: 5px 0;
`;
const RatingDiv = styled.div`
  display: flex;
`;
const AddCartBtn = styled.button`
  background-color: #f0c14b;
  border: 1px solid;
  border-color: yellow;
`;

export default Product;
