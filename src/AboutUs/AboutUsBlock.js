import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import photo from "../Assets/gradiant-bg-2.jpg";
import users from "../Assets/app-users.png";
import icon01 from "../Assets/icon01.png";
import icon02 from "../Assets/icon02.png";
import icon03 from "../Assets/icon03.png";
import womanicon from "../Assets/womanicon.png";
import balance from "../Assets/balanceImage.png";
import music from "../Assets/musicSign.png";
import firstMusic from "../Assets/musicSign01.png";
import secondmusicicon from "../Assets/musicSign03.png";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

class AboutUsBlock extends React.Component {
  render() {
    const firstUI = () => {
      return (
        <StyleBox>
          <img src={photo} alt="background" className="backgroundImg" />

          <Box className="content">
            <Box className="header">ABOUT US</Box>
            <Box>
              <Typography className="entryTitle">
                Digital Transformation to
              </Typography>
              <Typography className="entryTitle">Grow Your Company!</Typography>
            </Box>
            <Box className="parahraph">
              <Typography>
                Our versatile team is built of designers, developers and
              </Typography>
              <Typography>
                digitals marketers who all bring unique experience.
              </Typography>
            </Box>
          </Box>
        </StyleBox>
      );
    };
    const SecondUI = () => {
      return (
        <MainBox style={{ backgroundColor: "white" }}>
          <Box
            style={{
              backgroundColor: "",
              height: "100vh",
              width: "100vh",
              paddingLeft: "5%",
            }}
          >
            <Box>
              <Box className="perentText">
                <Typography className="textarea">
                  Manage Everything for
                </Typography>
                <Typography className="textarea">
                  Brand and tradeMark!
                </Typography>
              </Box>
              <Box className="childtext">
                <Typography className="paragraphtext">
                  Our success in creating business solutions is due in large
                  part
                </Typography>
                <Typography className="paragraphtext">
                  spacially to talented and highly committed team. Having these
                </Typography>
                <Typography className="paragraphtext">
                  marketplace to your branded skilled team of designers and
                </Typography>
                <Typography className="paragraphtext">
                  developers for our modern sales CRM frees revenue.
                </Typography>
                <Box className="textAlign">
                  <Box>
                    <img src={users} alt="peoples" />
                  </Box>
                  <Box className="belowText">
                    <Typography>Over 50K+ Users All over</Typography>
                    <Typography>the world...</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              height: "100vh",
              width: "100vh",
            }}
          >
            <Box className="firstpart">
              <Box className="iconsize">
                <img src={icon01} alt="icon" />{" "}
              </Box>
              <Box className="textcontainer">
                <Typography className="headingtext">
                  Real Time Activity
                </Typography>
                <Typography>
                  Our success in creating business solutions is due in large
                  part spacially to highly committed.
                </Typography>
              </Box>
            </Box>
            <Box className="secondpart">
              <Box className="iconsize">
                <img src={icon02} alt="icon02" />
              </Box>
              <Box className="textcontainer">
                <Typography className="headingtext">
                  Easy Integrations
                </Typography>
                <Typography>
                  Our success in creating business solutions is due in large
                  part spacially to highly committed.
                </Typography>
              </Box>
            </Box>
            <Box className="thirdpart">
              <Box className="iconsize">
                <img src={icon03} alt="icon03" />
              </Box>
              <Box className="textcontainer">
                <Typography className="headingtext">
                  Customers Tracking
                </Typography>
                <Typography>
                  Our success in creating business solutions is due in large
                  part spacially to highly committed.
                </Typography>
              </Box>
            </Box>
          </Box>
        </MainBox>
      );
    };
    const ThirdUI = () => {
      return (
        <ThordBox>
          <Box className="container">
            <Box
              style={{
                display: "flex",
                height: "100vh",
                width: "100vh",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography className="headingLine">
                  Better Security for Better
                </Typography>
                <Typography className="headingLine">
                  Protection & Strength
                </Typography>
              </Box>
              <Typography>
                Our success in creating business solutions is due in large part
                to our talented and highly committed team.
              </Typography>

              <Box className="boxheading">
                <Box>
                  <LooksOneIcon className="icononesize" />
                </Box>
                <Box>
                  <Box>
                    <Typography className="textbox">
                      Financial Strategy
                    </Typography>
                  </Box>
                  <Box className="paragraphtexthdn">
                    Having these marketplace to your branded skilled team.
                  </Box>
                </Box>
              </Box>
              <Box className="boxheading">
                <Box>
                  <LooksTwoIcon />
                </Box>
                <Box>
                  <Box>
                    <Typography className="textbox">
                      Message Experience
                    </Typography>
                  </Box>
                  <Box className="paragraphtexthdn">
                    Having these marketplace to your branded skilled team.
                  </Box>
                </Box>
              </Box>
              <Box className="boxheading">
                <Box>
                  <Looks3Icon />
                </Box>
                <Box>
                  <Box>
                    <Typography className="textbox">Data Tracking</Typography>
                  </Box>
                  <Box className="paragraphtexthdn">
                    Having these marketplace to your branded skilled team.
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                height: "100vh",
                width: "100vh",
              }}
            >
              <Box>
                <Box className="musicLogo">
                  <Box>
                    <img
                      src={secondmusicicon}
                      alt="musicIcons"
                      className="firstmusic"
                    />
                  </Box>
                  <Box>
                    <img
                      src={firstMusic}
                      alt="firstmusicIcon"
                      className="musicIconssize"
                    />
                  </Box>
                </Box>
                <Box className="saperate ">
                  <Box>
                    <img src={balance} alt="balance" className="balanceimage" />
                  </Box>
                  <Box>
                    <img src={womanicon} alt="icon" className="womanIcon" />
                  </Box>
                  <Box>
                    <img src={music} alt="music" className="musicsignlog" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </ThordBox>
      );
    };

    return (
      <Box>
        <Grid>{firstUI()}</Grid>
        <Grid>{SecondUI()}</Grid>
        <Grid>{ThirdUI()}</Grid>
      </Box>
    );
  }
}

export default AboutUsBlock;

const StyleBox = styled(Box)({
  position: "relative",
  "& .backgroundImg": {
    display: "block",
    height: "60vh",
    width: "100%",
  },
  "& .content": {
    position: "absolute",
    top: "10px",
    left: "10px",
    display: "flex",
    fontSize: "24px",
    fontWeight: "bold",
    flexDirection: "column",
    margin: "20px 20px 20px 20px",
    padding: "5%",
    gap: "5%",
  },
  "& .header": {
    fontFamily: "Syne, sans-serif",
    fontWeight: "bold",
    fontSize: "12px",
    backgroundColor: "rgb(75 131 255)",
    height: "20px",
    width: "14%",
    display: "flex",

    padding: "0 15px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: "20px",
    marginBottom: "1%",
  },
  "& .entryTitle": {
    display: "flex",
    fontSize: "46px",
    lineHeight: "36px",
    fontFamily: " syne, sans-serif",
    letterSpacing: "-1px",
    fontWeight: "bold",
    marginTop: "2%",
  },
  "& .parahraph": {
    fontSize: "17px",
    fontFamily: "DM Sans, sans-serif",
    lineHeight: 1.6,
    color: "#5D6374",
    marginTop: "8%",
  },
});

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  "& .textarea": {
    display: "flex",
    fontFamily: " Syne, sans-serif",
    fontSize: "38px",
    fontWeight: "bold",
  },
  "& .paragraphtext": {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "17px",
    lineHeight: 1.6,
    color: "#5D6374",
  },
  "& .textAlign": {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Syne, sans-serif",
    fontSize: "17px",
    fontWeight: "bold",
    color: "#191D28",
    gap: "3%",
    marginTop: "20px",
  },
  "& .perentText": {
    marginTop: "140px",
  },
  "& .childtext": {
    margin: "10px 50px 15px 0px",
  },
  "& .belowText": {
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
  },
  "& .firstpart": {
    display: "flex",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 30px 50px 0px rgba(0, 0, 0, 0.1)",
    marginTop: "10%",
    height: "10%",
    padding: "5px 5px 5px 5px",
  },
  "& .secondpart": {
    display: "flex",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 30px 50px 0px rgba(0, 0, 0, 0.1)",
    marginTop: "10%",
    marginLeft: "10%",
    height: "10%",
    padding: "5px 5px 5px 5px",
  },
  "& .thirdpart": {
    display: "flex",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 30px 50px 0px rgba(0, 0, 0, 0.1)",
    marginTop: "10%",
    height: "10%",
    padding: "5px 5px 5px 5px",
  },
  "& .iconsize": {
    display: "flex",
    height: "60px",
    width: "59px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 30px 50px 0px, rgb(0 0 0 / 10%)",
  },
  "& .textcontainer": {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
  },
  "& .headingtext": {
    display: "flex",
    fontFamily: "Syne, sans-serif",
    fontWeight: "bold",
    font: "200px",
  },
});

const ThordBox = styled(Box)({
  "& .container": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#c3c8ff90",
  },
  "& .headingLine": {
    display: "flex",
    fontFamily: " Syne, sans-serif",
    fontSize: "38px",
    fontWeight: "bold",
  },
  "& .womanIcon": {
    display: "flex",
    height: "70%",
    maxWidth: "100%",
    marginTop: "25%",
  },
  "& .balanceimage": {
    display: "flex",
    height: "50%",
    maxWidth: "150%",
    marginTop: "30%",
    marginLeft: "35%",
    position: "relative",
    animation: "firstbounce 3s 1",
  },
  "@keyframes firstbounce": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-20px)",
    },
  },
  "& .saperate": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .musicLogo": {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
    top: "12%",
  },
  "& .musicsignlog": {
    display: "flex",
    width: "60px",
    height: "auto",
    position: "relative",
    right: "250%",
    animation: "bounce 3s infinite",
  },
  "& .firstmusic": {
    display: "flex",
    width: "50px",
    height: "auto",
    position: "absolute",
    top: "20%",
    animation: "bounce 3s infinite",
  },
  "& .musicIconssize": {
    display: "flex",
    width: "20px",
    animation: "bounce 4s infinite",
  },
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-20px)",
    },
  },

  "& .boxheading": {
    display: "flex",
    direction: "row",
    gap: "2%",
    marginTop: "5%",
  },
  "& .textbox": {
    fontFamily: " Syne, sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
  },
  "& .icononesize": {},
  "& .paragraphtexthdn": {
    fontSize: "17px",
    fontFamily: "DM Sans, sans-serif",
  },
});
