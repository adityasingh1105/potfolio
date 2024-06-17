import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { textValue } from "../ConstantText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Images } from "../ConstantData";

const HomeMenu = () => {
  const [sliderData] = useState([
    { id: 1, logo: Images.logoOne },
    { id: 2, logo: Images.logoTwo },
    { id: 3, logo: Images.logoThree },
    { id: 4, logo: Images.logoFour },
    { id: 5, logo: Images.logoOne }, 
    { id: 6, logo: Images.logoTwo },
    { id: 7, logo: Images.logoThree },
    { id: 8, logo: Images.logoFour },
  ]);

  const renderHomeBox = () => {
    return (
      <HomeBox>
        <EngageBox>
          <AnimatedBox>
            <Typography>👋</Typography>
          </AnimatedBox>
          <Typography fontFamily="syne, Sans-serif">
            {textValue.engageText}
          </Typography>
        </EngageBox>

        <Typography
          fontFamily="syne, Sans-serif"
          fontSize="45px"
          fontWeight={700}
          color="#191d28"
          width="650px"
        >
          {textValue.mainHeading}
        </Typography>
        <Typography
          fontSize="17px"
          color="#5d6374"
          fontWeight={400}
          width="550px"
          fontFamily="Roboto"
        >
          {textValue.subHeading}
        </Typography>

        <Box className="startFreeContainer">
          <Button className="startFreeButton">
            {textValue.startFreeButton}
          </Button>
        </Box>
      </HomeBox>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust speed as needed
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplaySpeed as needed
    pauseOnHover: false,
    arrows: false,
  };

  const renderSlider = () => {
    return (
      <Box style={{ padding: "40px 6vw" }}>
        <Slider {...settings}>
          {sliderData.map(
            (
              item,
              index // Added unique key prop
            ) => (
              <img key={index} src={item.logo} alt={`logo-${item.id}`} />
            )
          )}
        </Slider>
      </Box>
    );
  };

  return (
    <Fragment>
      {renderHomeBox()}
      {renderSlider()}
    </Fragment>
  );
};

const rotateAnimation = keyframes`
  0% {transform: rotate(0deg)};
  20% {transform: rotate(5deg)};
  40% {transform: rotate(10deg)};
  60% {transform: rotate(0deg)};
  80% {transform: rotate(5deg)};
  100% {transform: rotate(0deg)};
`;

const AnimatedBox = styled(Box)`
  animation: ${rotateAnimation} 1s linear infinite reverse;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
`;

const EngageBox = styled(Box)({
  width: "270px",
  height: "20px",
  backgroundColor: "#FFE484",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "10px 20px",
  gap: "10px",
});

const HomeBox = styled(Box)({
  padding: "0px 6vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  backgroundColor: "#90B1FC",
  height: "550px",
  "& .startFreeContainer": {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    cursor: "pointer",
    flexShrink: 0,
  },
  "& .startFreeButton": {
    backgroundColor: "#3366FF",
    borderRadius: "2px",
    color: "#ffffff",
    border: "0px solid #3366FF",
    textTransform: "unset",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: 700,
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#294d99",
      boxShadow: "0 10px 20px 0 rgba(51, 102, 255, 0.4)",
      transform: "translateY(-1px)",
    },
    "@media screen and (max-width: 600px)": {
      padding: "10px 20px",
      fontSize: "14px",
    },
    "@media screen and (max-width: 500px)": {
      padding: "8px 15px",
      fontSize: "12px",
    },
  },
});

export default HomeMenu;
