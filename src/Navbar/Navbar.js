import { Box, Button, Drawer, styled } from "@mui/material";
import React, { useState } from "react";
import { Images } from "../ConstantData";
import { textValue } from "../ConstantText";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import BuildIcon from "@mui/icons-material/Build";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
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
        <StyledNavButton startIcon={<HomeIcon />}>Home</StyledNavButton>
        <StyledNavButton startIcon={<BusinessIcon />}>Company</StyledNavButton>
        <StyledNavButton startIcon={<BuildIcon />}>Projects</StyledNavButton>
        <StyledNavButton startIcon={<ArticleIcon />}>Blog</StyledNavButton>
        <StyledNavButton startIcon={<ContactMailIcon />}>
          Contact
        </StyledNavButton>
      </Box>
      <Box className="startFreeContainer">
        <Button className="startFreeButton">{textValue.startFreeButton}</Button>
        {HamburgerIcon()}
      </Box>
      <Drawer anchor="right" open={drawer} onClose={toggleDrawer}>
        <StyledDrawerBox>
          <StyledDrawerButton startIcon={<HomeIcon />} onClick={toggleDrawer}>
            Home
          </StyledDrawerButton>
          <StyledDrawerButton
            startIcon={<BusinessIcon />}
            onClick={toggleDrawer}
          >
            Company
          </StyledDrawerButton>
          <StyledDrawerButton startIcon={<BuildIcon />} onClick={toggleDrawer}>
            Projects
          </StyledDrawerButton>
          <StyledDrawerButton
            startIcon={<ArticleIcon />}
            onClick={toggleDrawer}
          >
            Blog
          </StyledDrawerButton>
          <StyledDrawerButton
            startIcon={<ContactMailIcon />}
            onClick={toggleDrawer}
          >
            Contact
          </StyledDrawerButton>
        </StyledDrawerBox>
      </Drawer>
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
    "@media screen and (max-width: 400px)": {
      width: "120px",
    },
    "@media screen and (max-width: 300px)": {
      width: "100px",
    },
  },
  "& .navButtonsContainer": {
    display: "flex",
    gap: "20px",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
  },
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
    "&:hover": {
      backgroundColor: "#294d99",
      boxShadow: "0 10px 20px 0 rgba(51, 102, 255, 0.4)",
      transform: "translateY(-1px)",
    },
    transition: "background-color 0.3s ease",
    fontSize: "16px",
    fontWeight: 700,
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

const StyledDrawerBox = styled(Box)({
  padding: "20px",
  width: "250px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  height: "100%",
  "& .navBarBtn": {
    textTransform: "unset",
    color: "#191d28",
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "10px",
    "&:hover": {
      color: "#4b83ff",
      background: "transparent",
    },
  },
});

const StyledDrawerButton = styled(Button)({
  justifyContent: "flex-start",
  textTransform: "none",
  color: "#191d28",
  fontSize: "18px",
  fontWeight: 700,
  marginBottom: "10px",
  padding: "10px 20px",
  borderRadius: "8px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    color: "#4b83ff",
  },
});

const StyledNavButton = styled(Button)({
  textTransform: "none",
  color: "#191d28",
  fontSize: "15px",
  fontWeight: 700,
  padding: "6px 12px",
  borderRadius: "4px",
  transition: "background-color 0.3s ease, color 0.3s ease",
  display: "flex",
  alignItems: "center",
  "& .MuiButton-startIcon": {
    marginRight: "8px",
  },
  "&:hover": {
    backgroundColor: "#e0e0e0",
    color: "#4b83ff",
  },
});
