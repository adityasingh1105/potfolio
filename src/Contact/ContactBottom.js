import { Box, Typography, List, ListItem } from "@mui/material";
import React, { Component } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareBehance } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Images } from "../ConstantData";
import { textValue } from "../ConstantText";

class ContactBottom extends Component {
  render() {
    return (
      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "15px",
        }}
      >
        <Box style={{ backgroundColor: "", height: "200px", width: "250px" }}>
          <img
            src={Images.logoImg}
            className="logoImage"
            alt={textValue.logoAlt}
            style={{ width: "200px", height: "43px" }}
          />

          <Typography>
            Our success in creating business
            <br />
            solutions is due in part specially to
            <br /> talented committed team
          </Typography>
          <Box>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <FontAwesomeIcon icon={faSquareBehance} size="2x" />
          </Box>
        </Box>
        <Box style={{ backgroundColor: "", height: "200px", width: "250px" }}>
          <Typography>Comapany</Typography>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Link href="#">About Us</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Help & Faq's</Link>
            <Link href="#">News Insights</Link>
            <Link href="#">Get in Touch</Link>
          </Box>
        </Box>
        <Box style={{ backgroundColor: "", height: "200px", width: "250px" }}>
          <Typography variant="h6" gutterBottom>
            Information
          </Typography>
          <List>
            <ListItem>
              3770 Hidden Meadow Drive
              <br />
              Venturia, ND 58489
            </ListItem>
            <ListItem>(704) 555-0127</ListItem>
            <ListItem>
              <Link href="mailto:softgen@example.com" underline="hover">
                softgen@example.com
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box
          style={{ backgroundColor: "black", height: "200px", width: "250px" }}
        >
          4
        </Box>
      </section>
    );
  }
}

export default ContactBottom;
