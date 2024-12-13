import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Images, futureStrategyData } from "../ConstantData";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

export default function FutureStrategy() {
  const renderManageBox = () => {
    return (
      <ManageMainBox>
        <Box className="imgBox1">
          <img src={Images.mobileImg1} />
        </Box>
        <Box className="imgBox2">
          <img src={Images.mobileImg2} />
        </Box>
        <Box className="contentBox">
          <Typography className="headingTxt">
            Manage Everything for Brand and Trademark!
          </Typography>
          <Typography className="description">
            Our success in creating business solutions is due in large part to
            our talented and highly committed team.
          </Typography>
          <Box>
            <Box className="iconText">
              <CheckCircleSharpIcon className="tickOption" />
              <Typography className="description">
                Solutions & Integration With Blockchain
              </Typography>
            </Box>
            <Box className="iconText">
              <CheckCircleSharpIcon className="tickOption" />
              <Typography className="description">
                AI Machine & Deep Learning
              </Typography>
            </Box>
            <Box className="iconText">
              <CheckCircleSharpIcon className="tickOption" />
              <Typography className="description">
                Over 100+ Payment Gateways Support
              </Typography>
            </Box>
            <Box className="iconText">
              <CheckCircleSharpIcon className="tickOption" />
              <Typography className="description">
                Dedicated Support 24/7
              </Typography>
            </Box>
          </Box>
        </Box>
      </ManageMainBox>
    );
  };

  return (
    <MainBox>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box className="textBox">
          <Typography className="headignTxt">
            Build A Future Strategy!
          </Typography>
          <Typography className="subHeading">
            Our success in creating business solutions is due in large part to
            our talented and highly committed team.
          </Typography>
        </Box>
        <Button className="exploreService">Explore Service</Button>
      </Box>
      <Box className="cardBox">
        <Grid container spacing={4}>
          {futureStrategyData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
              <Box
                className={`innerCardBox ${
                  index % 2 === 0 ? "evenInnerCardBox" : "innerCardBox"
                }`}
              >
                <img src={item.image} alt={item.title} className="imageIcon" />
                <Typography className="title">{item.title}</Typography>
                <Typography className="description">
                  {item.description}
                </Typography>
                <img
                  src={item.image}
                  alt={item.title}
                  width={"20px"}
                  height={"20px"}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {renderManageBox()}
    </MainBox>
  );
}

const MainBox = styled(Box)({
  padding: "20px 6vw",
  backgroundColor: "#FFFFFF",
  "&:hover": {},
  "& .textBox": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  "& .headignTxt": {
    fontFamily: "syne, Sans-serif",
    fontSize: "45px",
    fontWeight: 700,
    color: "#191d28",
    maxWidth: "650px",
    "@media screen and (max-width: 800px)": {
      fontSize: "36px",
    },
    "@media screen and (max-width: 600px)": {
      fontSize: "30px",
    },
    "@media screen and (max-width: 400px)": {
      fontSize: "24px",
    },
  },
  "& .subHeading": {
    fontSize: "17px",
    color: "#5d6374",
    fontWeight: 400,
    maxWidth: "550px",
    fontFamily: "Roboto",
  },
  "& .exploreService": {
    padding: "10px 20px",
    background:
      "linear-gradient(45deg, rgba(101, 182, 255, 1) 0%, rgba(75, 131, 255, 1) 100%)",
    color: "#fff", // Changed text color to white for better visibility
    fontWeight: "bold", // Made the button text bold
    borderRadius: "5px", // Added border radius for a smoother look
  },
  "& .cardBox": {
    backgroundImage: `url(${Images.futureStrategyBgImg})`,
    padding: "20px",
    borderRadius: "10px", // Added border radius for a smoother look
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Added box shadow for a more classy appearance
  },
  "& .innerCardBox": {
    backgroundColor: "rgba(219, 222, 255, 0.5)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    transform: "translateY(20px)",
    borderRadius: "5px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(15px)",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Added box shadow on hover for a floating effect
    },
  },
  "& .evenInnerCardBox": {
    backgroundColor: "rgba(219, 222, 255, 0.5)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    transform: "translateY(0px)",
    borderRadius: "5px",
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Added box shadow on hover for a floating effect
    },
  },
  "& .imageIcon": {
    height: "100px",
    width: "100px",
  },
  "& .title": {
    fontSize: "18px",
    color: "#000",
    fontWeight: 700,
    fontFamily: "syne, Sans-serif",
    "@media screen and (max-width: 800px)": {
      fontSize: "17px",
    },
  },
  "& .description": {
    fontSize: "15px",
    color: "#5d6374",
    fontWeight: 400,
    fontFamily: "Roboto",
  },
});

const ManageMainBox = styled(Box)({
  margin: "90px 0px",
  borderRadius: "10px",
  padding: "80px 4vw",
  backgroundColor: "#c3c8ff90",
  display: "flex",
  gap: "20px",
  flexWrap: "wrap", // Added flex-wrap to ensure the boxes wrap in smaller screens
  "& .imgBox1": {
    width: "250px",
    height: "450px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  "& .imgBox2": {
    width: "250px",
    height: "450px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "translateY(30px)",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  "& .headingTxt": {
    fontFamily: "syne, Sans-serif",
    fontSize: "45px",
    fontWeight: 700,
    color: "#191d28",
    maxWidth: "650px",
    "@media screen and (max-width: 800px)": {
      fontSize: "36px",
    },
    "@media screen and (max-width: 600px)": {
      fontSize: "30px",
    },
    "@media screen and (max-width: 400px)": {
      fontSize: "24px",
    },
  },
  "& .description": {
    fontFamily: "syne, Sans-serif",
    fontSize: "18px",
    color: "#5D6374",
    "@media screen and (max-width: 800px)": {
      fontSize: "16px",
    },
    "@media screen and (max-width: 600px)": {
      fontSize: "14px",
    },
    "@media screen and (max-width: 400px)": {
      fontSize: "12px",
    },
  },
  "& .contentBox": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "30px",
    flex: 1, // Ensures the content box takes up remaining space
  },
  "& .iconText": {
    display: "flex",
    gap: "10px",
    alignItems: "center", // Align items center for better vertical alignment
  },
  "& .tickOption": {
    color: "blue",
    fontSize: "20px", // Increased icon size for better visibility
  },
});
