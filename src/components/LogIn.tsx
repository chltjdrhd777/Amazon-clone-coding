import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CombineState } from "../redux/combinedStore";
import { actions } from "../redux/homeReducer";

function LogIn() {
  const [personalInfo, setPersonalInfo] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const homeLooker = useSelector((state: CombineState) => state.homeReducer);
  const infoFinding = homeLooker.personalInfo.findIndex(
    (el) =>
      el.email === personalInfo.email && el.password === personalInfo.password
  );
  const goToHomepage = useHistory();

  const signIn = (e: any) => {
    e.preventDefault();
    if (infoFinding !== -1) {
      goToHomepage.push("/home");
    }
  };

  const register = (e: any) => {
    e.preventDefault();
    if (infoFinding !== -1) {
      console.log("your id and Info is already registered");
    } else {
      dispatch(actions.addAccount(personalInfo));
    }
  };

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
            <input
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({
                  email: e.target.value,
                  password: personalInfo.password,
                })
              }
              type="email"
            />
            <h5>Password</h5>
            <input
              value={personalInfo.password}
              onChange={(e) =>
                setPersonalInfo({
                  email: personalInfo.email,
                  password: e.target.value,
                })
              }
              type="password"
            />
            <SignIn onClick={signIn} type="submit">
              Sign In
            </SignIn>
          </form>

          <p>It is demo login page</p>
          <Register onClick={register}>Create your account now</Register>
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

const SignIn = styled.button``;
const Register = styled.button``;

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
