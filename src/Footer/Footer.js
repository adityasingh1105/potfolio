import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Images } from "../ConstantData";
import { textValue } from "../ConstantText";

const Footer = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,4}$/,
          "Invalid email address"
        )
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const renderFirstBox = () => {
    return (
      <Box className="firstBox">
        <img src={Images.logoImg} className="logonImg" alt="Logo" />
        <Typography>{textValue.companyDescription}</Typography>
        <Box className="socialBox">
          <FacebookIcon fontSize="small" className="icon" />
          <XIcon fontSize="small" className="icon" />
          <LinkedInIcon fontSize="small" className="icon" />
          <InstagramIcon fontSize="small" className="icon" />
        </Box>
      </Box>
    );
  };

  const renderSecondBox = () => {
    return (
      <SecondBox>
        <Typography className="headerTxt">{textValue.company}</Typography>
        <Typography className="linkTxt">{textValue.aboutUs}</Typography>
        <Typography className="linkTxt">{textValue.ourTeam}</Typography>
        <Typography className="linkTxt">{textValue.helpFaqs}</Typography>
        <Typography className="linkTxt">{textValue.newsInsights}</Typography>
        <Typography className="linkTxt">{textValue.getInTouch}</Typography>
      </SecondBox>
    );
  };

  const renderThirdBox = () => {
    return (
      <ThirdBox>
        <Typography className="headerTxt">{textValue.information}</Typography>
        <Typography className="addrsTxt">{textValue.address}</Typography>
        <Typography className="linkTxt">{textValue.phoneNumber}</Typography>
        <Typography className="linkTxt">{textValue.email}</Typography>
      </ThirdBox>
    );
  };

  const renderFourthBox = () => {
    return (
      <FourthBox>
        <Box className="imageBox">
          <Box className="footerEmojiMan">
            <img
              width="100%"
              height="100%"
              src={Images.footerEmojiMan}
              alt="Emoji Man"
            />
          </Box>
          <Box>
            <form onSubmit={formik.handleSubmit} className="emailBox">
              <TextField
                className="selectInput"
                placeholder={textValue.placeholder}
                variant="standard"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <Button type="submit" className="sendButton">
                <img src={Images.sendButton} alt={textValue.buttonText} />
              </Button>
            </form>
          </Box>
          <Typography className="updateTxt">{textValue.updates}</Typography>
        </Box>
      </FourthBox>
    );
  };

  return (
    <MainBox>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          {renderFirstBox()}
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          {renderSecondBox()}
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          {renderThirdBox()}
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          {renderFourthBox()}
        </Grid>
      </Grid>
    </MainBox>
  );
};

export default Footer;

const MainBox = styled(Box)(({ theme }) => ({
  padding: "40px 6vw",
  backgroundImage: `url(${Images.footerBgImg})`,
  "& .firstBox": {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      gap: "20px",
      flexDirection: "column",
      alignItems: "start",
    },
  },
  "& .socialBox": {
    display: "flex",
    gap: "10px",
  },
  "& .icon": {
    padding: "10px",
    borderRadius: "5px",
    color: "#8F939F",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#4b83ff",
      color: "#FFF",
      transition: "background-color .7s ease",
    },
  },
}));

const SecondBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    alignItems: "start",
  },
  "& .headerTxt": {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Syne, sans-serif",
  },
  "& .linkTxt": {
    fontSize: 15,
    color: "#5d6374",
    cursor: "pointer",
    "&:hover": {
      color: "#4b83ff",
      transition: "color .7s ease",
    },
  },
}));

const ThirdBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: "20px",

  flexDirection: "column",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    alignItems: "start",
  },
  "& .headerTxt": {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Syne, sans-serif",
  },
  "& .linkTxt": {
    fontSize: 15,
    color: "#5d6374",
    cursor: "pointer",
    "&:hover": {
      color: "#4b83ff",
      transition: "color .7s ease",
    },
  },
  "& .addrsTxt": {
    fontSize: 15,
    color: "#5d6374",
    cursor: "pointer",
    width: "200px",
    "&:hover": {
      color: "#4b83ff",
      transition: "color .7s ease",
    },
  },
}));

const FourthBox = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "relative",
  "& .imageBox": {
    position: "absolute",
    top: "-100px",
    [theme.breakpoints.down("md")]: {
      position: "static",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  "& .footerEmojiMan": {
    height: "210px",
    width: "150px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  "& .emailBox": {
    display: "flex",
    height: "70px",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingLeft: "10px",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  "& .selectInput": {
    backgroundColor: "#fff",
    width: "100%",
    "& .MuiInput-root": {
      "&::before": {
        content: "none",
      },
      "&::after": {
        content: "none",
      },
    },
  },
  "& .updateTxt": {
    fontSize: 15,
    color: "#5d6374",
    width: "200px",
  },
}));
