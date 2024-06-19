import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, styled } from "@mui/material";
import { accordionData } from "../ConstantData";
import { textValue } from "../ConstantText";

export default function FAQ() {
  return (
    <AccodianMainBox>
      <Box className="textBox">
        <Typography className="helpTxt">Help and FAQ's</Typography>
        <Typography className="helpDetails">{textValue.helpDetails}</Typography>
      </Box>
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          className="accordionMainBox"
          defaultExpanded={item.id === "1"}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
          >
            <Typography className="accordionQuestion">
              {item.accordionQuestion}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordionAnswer">
              {item.accordionAnswer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </AccodianMainBox>
  );
}

const AccodianMainBox = styled(Box)(({ theme }) => ({
  padding: "0px 15vw",
  backgroundColor: "#F3F7FD",
  "& .helpTxt": {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "38px",
    color: "#000",
    fontFamily: "Syne, sans-serif",
    marginBottom: "40px",
  },
  "& .helpDetails": {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "17px",
    color: "#5d6374",
  },
  "& .accordionMainBox": {
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
    backgroundColor: "#F9FCFE",
  },
  "& .css-1086bdv-MuiPaper-root-MuiAccordion-root::before": {
    backgroundColor: "transparent",
  },
  "& .Mui-expanded": {
    backgroundColor: "#FFF",
  },
  "& .accordionQuestion": {
    fontFamily: "Syne, sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "36px",
    },
  },
  "& .accordionAnswer": {
    fontSize: "17px",
    color: "#5d6374",
  },
  "& .textBox": {
    padding: "30px 0px",
  },
}));
