import { Box, styled } from "@mui/material";
import React from "react";
import Demo from "./Demo";
import Horizontal from "./Horizontal";

export default function AboutUs() {
  return (
    <MainBox>
      <Demo />
      <Horizontal />
    </MainBox>
  );
}
const MainBox = styled(Box)({
  padding: "0px 6vw",
  //   margin: "90px 0px",
  backgroundColor: "#FFFFFF",
});
