import React, { Component } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import Navbar from "../Navbar/Navbar";
import image from "../Assets/gradiant-bg-2.jpg";
import image1 from "../Assets/globe-dark.png";
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { textValue } from "../ConstantText";

class Home extends Component {
  render() {
    return (
      <Mainbox>
        <Navbar />
        <Box className="container">
          <img src={image1} alt="Globe" className="rotated" />
          <Box className="container-wraper">
            <Box>
              <Typography className="text" variant="h2">
                {textValue.textHeader}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  color: "#555",
                }}
              >
                {textValue.subTitle}
                <br />
                {textValue.subTitleNext}
              </Typography>
            </Box>
            <Box className="papar">
              <LocationOnIcon className="paper-wraper" />
              <Box>
                <h3 style={{ margin: 0 }}>
                  962 Fifth Avenue,
                  <br />
                  New York, NY10022
                </h3>
              </Box>
            </Box>
            <Box className="size">
              <MailIcon
                style={{
                  marginRight: "8px",
                  height: "100px",
                  width: "50px",
                  backgroundColor: "#4FF8BFF",
                }}
              />
              <Box>
                <h3 style={{ margin: 0 }}>
                  hello@themaster.net,
                  <br />
                  yourmail@gmail.com
                </h3>
              </Box>
            </Box>
            <Box className="item">
              <WifiCalling3Icon
                style={{
                  marginRight: "8px",
                  height: "100px",
                  width: "50px",
                  backgroundColor: "#4FF8BFF",
                }}
              />
              <Box>
                <h3 style={{ margin: 0 }}>
                  (+123) 456 789 101
                  <br />
                  +1-302-123-456
                </h3>
              </Box>
            </Box>
          </Box>
          <Box className="middile">
            <Box>
              <Typography className="textarea" variant="h2">
                {textValue.textHeaderNext}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  color: "#555",
                }}
              >
                {textValue.subTitle}
                <br />
                {textValue.subTitleNext}
              </Typography>
            </Box>
            <Box>
              <Box className="size-value">
                <TextField
                  className="textfiled-area"
                  placeholder="First Name"
                  size="medium"
                  inputProps={{ maxLength: 400 }}
                  sx={{
                    width: "290px",
                  }}
                />

                <TextField
                  className="textfiled-area"
                  placeholder="Last Name"
                  size="medium"
                  inputProps={{ maxLength: 400 }}
                />
              </Box>
              <Box className="Sizepaper">
                <TextField
                  className="textfiled-area"
                  placeholder="Email"
                  size="medium"
                  inputProps={{ maxLength: 400 }}
                  sx={{
                    width: "290px",
                  }}
                />

                <TextField
                  className="textfiled-area"
                  placeholder="Phone"
                  size="medium"
                  inputProps={{ maxLength: 400 }}
                />
              </Box>
              <TextareaAutosize
                className="holdervalue"
                placeholder="Message"
                minRows={6}
                inputProps={{
                  style: {
                    color: "black",
                    "::placeholder": {
                      color: "#888",
                      opacity: 1,
                    },
                  },
                }}
              />
              <Button
                className="submit-btn"
                variant="contained"
                color="primary"
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Mainbox>
    );
  }
}

export default Home;

const Mainbox = styled(Box)({
  "& .container": {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "10px",
    margin: "0px",
    backgroundColor: "white",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  "& .container-wraper": {
    height: "80vh",
    width: "100vh",
    margin: "50px 1px 0px 130px",
  },

  "@keyframes glob": {
    "0%": {
      transform: "translate(-50%, -50%) rotate(0deg)",
    },
    "100%": {
      transform: "translate(-50%, -50%) rotate(360deg)",
    },
  },

  "& .rotated": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "600px",
    width: "600px",
    animation: "glob 50s linear infinite",
  },
  "& .papar": {
    display: "flex",
    alignItems: "center",
  },
  "& .paper-wraper": {
    marginRight: "8px",
    height: "100px",
    width: "50px",
    backgroundColor: "#4FF8BFF",
  },
  "& .size": {
    display: "flex",
    alignItems: "center",
  },
  "& .size-value": {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "20px",
    marginTop: "40px",
  },
  "& .Sizepaper": {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
  "& .size-paper-child": {
    position: "relative",
  },
  "& .wraper": {
    position: "relative",
  },
  "& .wraper-one": {
    position: "relative",
  },
  "& .parent-item": {
    display: "flex",
    justifyContent: "",
  },
  "& .parent-item-one": {
    backgroundColor: "pink",
    height: "50vh",
    width: "50vh",
  },
  "& .item": {
    display: "flex",
    alignItems: "center",
  },
  "& .middile": {
    height: "80vh",
    width: "100vh",
    margin: "50px 10px 0px 1px",
  },
  "& .text": {
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
    fontSize: "32px",
    lineHeight: "36px",
    fontFamily: "var(--softgen-primary-font)",
  },
  "& .textarea": {
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
    fontSize: "28px",
    lineHeight: "36px",
  },
  "& .textfiled-area": {
    width: "290px",
    backgroundColor: "white",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
        boxShadow: "none",
      },
    },
  },
  "& .holdervalue": {
    width: "88%",
    height: "",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    resize: "none",
    marginTop: "20px",
    outline: "none",
  },
  "& .submit-btn": {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "10px 20px",
    fontSize: "11px",
    borderRadius: "4px",
    marginTop: "20px",
  },
});
