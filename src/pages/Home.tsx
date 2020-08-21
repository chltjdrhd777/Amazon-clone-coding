import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components/macro";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Product from "../components/Product";
import { productInfo } from "../server/productInformation";

function Home() {
  ///! I tried to realize infinite banner carousel with useState
  //////////////? banner img url////////////////////
  const imageStore = [
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_ko_KR_1x._CB432534530_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_ko_KR_2x._CB428993284_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_ko_KR_1x._CB431858163_.jpg",
  ];
  const [bannerImg, setBannerImg] = useState({
    index: 0,
    presentImg: imageStore[0],
    alt: "bannerImage",
  });
  console.log(bannerImg.index);
  ////////////////? banner button function/////////////////////
  const movePrev = () => {
    if (bannerImg.index > 0) {
      setBannerImg({ ...bannerImg, index: bannerImg.index - 1 });
    } else if (bannerImg.index === 0) {
      setBannerImg({ ...bannerImg, index: imageStore.length - 1 });
    }
  };
  const moveForw = () => {
    if (bannerImg.index !== imageStore.length - 1) {
      setBannerImg({ ...bannerImg, index: bannerImg.index + 1 });
    } else if (bannerImg.index === imageStore.length - 1) {
      setBannerImg({ ...bannerImg, index: 0 });
    }
  };
  ////////////////? component return part//////////////////////////
  return (
    <>
      <Header />
      <BannderDiv>
        <img src={imageStore[bannerImg.index]} alt={bannerImg.alt} />

        <PrevBtnDiv onClick={movePrev}>
          <ArrowBackIosIcon />
        </PrevBtnDiv>
        <NextBtnDiv onClick={moveForw}>
          <ArrowForwardIosIcon />
        </NextBtnDiv>
      </BannderDiv>
      <ProductsDiv>
        {productInfo.map((e) => (
          <Product
            title={e.title}
            price={e.price}
            rating={Math.floor(e.rating!)}
            imageUrl={e.imageUrl}
            key={e.id}
          />
        ))}
      </ProductsDiv>
    </>
  );
}

const PrevBtnDiv = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 10%;
  left: 2%;
  opacity: 0;
  transition: all 0.2s ease-in;

  cursor: pointer;
  & svg {
    padding: 20px;
  }
`;
const NextBtnDiv = styled(PrevBtnDiv)`
  left: 90%;
`;

const BannderDiv = styled.div`
  position: relative;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  /*  z-index: -1; */
  margin-bottom: -150px;
  & img {
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
  &:hover {
    ${PrevBtnDiv} {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const ProductsDiv = styled.div`
  display: flex;
`;
export default Home;
