import React from "react";
import styled from "styled-components/macro";
import Header from "./Header";
import { useSelector } from "react-redux";
import { CombineState } from "../redux/combinedStore";
import CheckOutList from "./CheckOutList";

function CheckOut() {
  const headerLooker = useSelector((state: CombineState) => state.homeReducer);
  const { basket } = headerLooker;

  return (
    <>
      <Header />
      <CheckOutBodyDiv>
        <CheckOutContainer>
          <CheckOutBanner
            src="https://i.graphicmama.com/blog/wp-content/uploads/2019/10/21144144/21-Free-Banner-Templates-for-Photoshop-and-Illustrator.jpg"
            alt="bannerImg"
          />
          {basket.length === 0 ? (
            <div>
              <h2>Your basket is empty</h2>
              <p>Recommend you to shop what you want at the Homepage</p>
            </div>
          ) : (
            <ItemsDiv>
              <h2>Your shopping list</h2>
              {basket.map((el) => (
                <CheckOutList
                  key={Math.random().toString()}
                  id={el.id}
                  title={el.title}
                  imageUrl={el.imageUrl}
                  price={el.price}
                  rating={el.rating}
                />
              ))}
            </ItemsDiv>
          )}
        </CheckOutContainer>
        {basket.length > 0 && <div>hi</div>}
      </CheckOutBodyDiv>
    </>
  );
}

const CheckOutBodyDiv = styled.div`
  display: flex;
`;

const CheckOutContainer = styled.div`
  background-color: white;
`;
const CheckOutBanner = styled.img`
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
`;
const ItemsDiv = styled.div`
  display: grid;
  grid-template-columns:
    2fr 1fr
    & h2 {
    padding: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid grey;
  }
`;

export default CheckOut;
