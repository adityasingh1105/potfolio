import { Box, Button } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Button
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#4A83FF",
          color:"#FFFFFF",
        }}
        onClick={scrollToTop}
        className="scroll-to-top-button"
      >
        <ArrowUpwardIcon  />
      </Button>
    </Box>
  );
};

export default ScrollToTopButton;
