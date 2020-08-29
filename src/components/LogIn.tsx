import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <>
      <LoginDiv>
        <Link to="/">
          <img
            className="loginLogo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <LoginContainer>
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="text" />
            <button>Sign In</button>
          </form>

          <p>It is demo login page</p>
          <button>Create your account now</button>
        </LoginContainer>
      </LoginDiv>
    </>
  );
}

const LoginDiv = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .loginLogo {
    width: 100px;
    background-color: black;
    padding: 10px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid lightgrey;

  & > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  & > form > h5 {
    margin-bottom: 5px;
  }

  & > form > input {
    height: 30px;
    margin-bottom: 5px;
    background-color: grey;
    width: 98%;
  }

  & > form > button {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: grey;
    color: #111;
  }

  & > p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  & > button {
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

export default LogIn;
