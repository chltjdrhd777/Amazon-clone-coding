import React from "react";
import styled from "styled-components";
import { productInfo } from "../server/productInformation";

export interface ProductPropsType {
  id?: string;
  title?: string;
  price?: number;
  rating?: number;
  imageUrl?: string;
}
console.log(productInfo);

function Product({ id, title, price, rating, imageUrl }: ProductPropsType) {
  return (
    <ContainerDiv>
      <p>{title}</p>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div``;

export default Product;
