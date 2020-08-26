import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { CombineState } from "../redux/combinedStore";

function TotalAmount() {
  const headerLooker = useSelector((state: CombineState) => state.homeReducer);
  const { basket } = headerLooker;

  const totalCost = basket
    .map((el) => el.price!)
    .reduce((sum: number, current: number) => {
      return sum + current;
    });

  return (
    <TotalContainerDiv>
      <CurrencyFormat
        renderText={(value: any) => (
          <>
            <p>
              Subtotal ({basket.length} items):{" "}
              <strong>{`KRW ${value}`}</strong>
            </p>
            <TotalGiftSmall>
              <CheckBoxInput type="checkbox" /> This order containes a gift
            </TotalGiftSmall>
          </>
        )}
        decimalScale={2}
        value={totalCost}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </TotalContainerDiv>
  );
}

const TotalContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;

  & button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
const TotalGiftSmall = styled.small`
  display: flex;
  align-items: center;
`;
const CheckBoxInput = styled.input`
  margin-right: 5px;
`;

export default TotalAmount;
