import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

function Home() {
  function bannerSlider() {}

  ////////////////? component return part//////////////////////////
  return (
    <>
      <Header />
      <HomeContainerDiv>
        <BannderDiv>
          <BannerSlideUl>
            <Link to="/stock">
              <BannderSlideLi>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_ko_KR_1x._CB432534530_.jpg"
                  alt="banner1"
                />
              </BannderSlideLi>
            </Link>

            <BannderSlideLi>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_ko_KR_1x._CB431860455_.jpg"
                alt="banner2"
              />
            </BannderSlideLi>

            <BannderSlideLi>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_ko_KR_1x._CB431478336_.jpg"
                alt="banner2"
              />
            </BannderSlideLi>
          </BannerSlideUl>

          <Prev>
            <ArrowBackIosIcon />
          </Prev>
          <Next>
            <ArrowForwardIosIcon />
          </Next>
        </BannderDiv>
      </HomeContainerDiv>
    </>
  );
}

const HomeContainerDiv = styled.div`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Prev = styled.div`
  position: absolute;
  top: 33%;
  opacity: 0;
  border-radius: 10px;
  cursor: pointer;

  & svg {
    padding: 20px;
  }

  transition: all 0.2s ease-in;
`;
const Next = styled(Prev)`
  right: 0;
`;

const BannderDiv = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;

  &:hover ${Prev} {
    opacity: 1;
    background: rgba(0, 0, 0, 0.3);
  }
`;
const BannerSlideUl = styled.ul`
  position: absolute;
`;
const BannderSlideLi = styled.li`
  & img {
    width: 100%;
    height: 250px;
  }
`;

export default Home;
