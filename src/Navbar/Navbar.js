import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { Images } from "../ConstantData";
import { textValue } from "../ConstantText";
import "./HamburgerIcon.css";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const HamburgerIcon = () => {
    return (
      <Box className="hamburger" onClick={toggleDrawer}>
        <span></span>
        <span className="center"></span>
        <span className="lastLine"></span>
      </Box>
    );
  };
  return (
    <StyledMainBox>
      <img src={Images.logoImg} className="logoImage" alt={textValue.logoAlt} />
      <Box className="navButtonsContainer">
        <Button className="navBarBtn">Home</Button>
        <Button className="navBarBtn">Company</Button>
        <Button className="navBarBtn">Projects</Button>
        <Button className="navBarBtn">Blog</Button>
        <Button className="navBarBtn">Contact</Button>
      </Box>
      <Box className="startFreeContainer">
        <Button className="startFreeButton">{textValue.startFreeButton}</Button>
        {HamburgerIcon()}
      </Box>
    </StyledMainBox>
  );
}

const StyledMainBox = styled(Box)({
  padding: "0px 6vw",
  height: "80px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  justifyContent: "space-between",
  "& .logoImage": {
    width: "150px",
  },
  "& .navButtonsContainer": {
    display: "flex",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
  },
  "& .navBarBtn": {
    textTransform: "unset",
    color: "#191d28",
    fontSize: "15px",
    fontWeight: 700,
    "&:hover": {
      color: "#4b83ff",
    },
    "&.MuiButton-root:hover": {
      background: "transparent",
    },
    marginRight: "20px",
  },
  "& .startFreeContainer": {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    cursor: "pointer",
  },
  "& .startFreeButton": {
    backgroundColor: "#3366FF",
    borderRadius: "2px",
    color: "#ffffff",
    border: "0px solid #3366FF",
    textTransform: "unset",
    transition: "background-color 1s ease",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#294d99",
      boxShadow: "0 10px 20px 0 rgba(51, 102, 255, 0.4)",
      transform: "translateY(-1px)",
    },
  },
});
