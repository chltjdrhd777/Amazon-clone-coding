import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <HeaderNav>
      <Link to="/home">
        <AmazonImg
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <SearchPartDiv>
        <SearchInput />
        <SearchIcon className="search__Icon" />
      </SearchPartDiv>

      <NavContainerDiv>
        <NavContentsMaker to="/login" subT="Hello" title="Sign In" />
        <NavContentsMaker to="" subT="Returns" title="& Orders" />
        <NavContentsMaker to="" subT="Your" title="Prime" />

        <Link to="/checkout" className="navContents__Link">
          <ShoppingDiv className="baskitIcon_Div">
            <ShoppingBasketIcon />
            <span className="OptionDescription2 bascket_counter">0</span>
          </ShoppingDiv>
        </Link>
      </NavContainerDiv>
    </HeaderNav>
  );
}

interface NavContentsProps {
  to: string;
  subT: string;
  title: string;
}

function NavContentsMaker({ to, subT, title }: NavContentsProps) {
  return (
    <Link to={to} className="navContents__Link">
      <OptionsContainerDiv>
        <span className="OptionDescription1">{subT}</span>
        <span className="OptionDescription2">{title}</span>
      </OptionsContainerDiv>
    </Link>
  );
}

const HeaderNav = styled.nav`
  background-color: black;
  display: flex;
  align-items: center;
`;
const AmazonImg = styled.img`
  width: 100px;
  margin: 10px 20px 0px;
  object-fit: contain;
`;

const SearchPartDiv = styled.div`
  flex: 1;
  display: flex;
  & .search__Icon {
    background-color: #cd9042;
    padding: 3px;
  }
`;
const SearchInput = styled.input`
  padding: 5px;
  height: 21px;
  width: 100%;
  border: none;
`;

const NavContainerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;

  & .navContents__Link {
    color: white;
    text-decoration: none;
  }

  & .OptionDescription1 {
    font-size: 10px;
  }

  & .OptionDescription2 {
    font-size: 13px;
    font-weight: 700;
  }
`;
const OptionsContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const ShoppingDiv = styled.div`
  display: flex;
  align-items: center;
  & .bascket_counter {
    margin: 0 10px;
  }
`;

export default Header;
