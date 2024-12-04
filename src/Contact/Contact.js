import React, { Component } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import Navbar from "../Navbar/Navbar";
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

class Home extends Component {
  render() {
    return (
      <Mainbox>
        <Navbar />
        <Box className="container">
          <Box className="container-wraper">
            <Box>
              <Typography className="text" variant="h2">
                Get In Touch
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  color: "#555",
                }}
              >
                Our success in creating business solutions is due in large part
                to
                <br />
                our talented and highly committed team.
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
                Fill Up The Form
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  color: "#555",
                }}
              >
                Our success in creating business solutions is due in large part
                to our
                <br />
                talented and highly committed team.
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
        <Box className="parent-item">
          <Box className="parent-item-one">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18836612.44698299!2d65.293875!3d71.432342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e1!3m2!1sen!2sus!4v1733248888053!5m2!1sen!2sus"
              width="1520"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
    margin: "100px",
  },
  "& .container-wraper": {
    backgroundColor: "",
    height: "80vh",
    width: "100vh",
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
    backgroundColor: "",
    height: "80vh",
    width: "100vh",
  },
  "& .text": {
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
    fontSize: "28px",
    lineHeight: "36px",
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
    width: "92.5%",
    height: "",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc", // Border color
    boxSizing: "border-box", // Ensure padding is included in width/height
    resize: "none", // Prevent resizing
    marginTop: "20px",
    outline: "none", // Remove the black outline on focus
  },
  "& .submit-btn": {
    backgroundColor: "#1976d2", // Custom blue color
    color: "white", // Text color
    padding: "10px 20px", // Padding for the button
    fontSize: "11px", // Font size for the text
    borderRadius: "4px", // Border radius for rounded corners
    marginTop: "20px",
  },
});
