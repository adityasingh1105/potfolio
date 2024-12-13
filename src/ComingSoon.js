import React from "react";
import { styled } from "@mui/system";
const ComingSoonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "#f4f4f4",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  padding: "20px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  transform: "scale(1)",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },
});

const Heading = styled("h1")({
  fontSize: "3rem",
  color: "#333",
  marginBottom: "10px",
  fontWeight: "bold",
  textTransform: "uppercase",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#ff6347", // Red-orange color on hover
  },
});

// Create a styled component for the paragraph text
const Paragraph = styled("p")({
  fontSize: "1.2rem",
  color: "#555",
  marginTop: "0",
  fontWeight: "300",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#333", // Darker color on hover
  },
});

const ComingSoon = () => {
  return (
    <ComingSoonContainer>
      <Heading>Coming Soon!</Heading>
      <Paragraph>This page is under development. Stay tuned!</Paragraph>
    </ComingSoonContainer>
  );
};

export default ComingSoon;