import React, { Component } from "react";
import {
  Box,
  TextField,
  Button,
  TextareaAutosize,
  Typography,
} from "@mui/material";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },
      errors: {},
    };
  }

  validate = () => {
    const { formData } = this.state;
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    this.setState({ errors: newErrors });

    return Object.keys(newErrors).length === 0;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log("Form submitted", this.state.formData);
    }
  };

  render() {
    const { formData, errors } = this.state;

    return (
      <Box component="form" onSubmit={this.handleSubmit}>
        <Box className="size-value">
          <Box>
            <TextField
              className="textfiled-area"
              placeholder="First Name"
              size="medium"
              name="firstName"
              value={formData.firstName}
              onChange={this.handleChange}
              sx={{ width: "290px" }}
            />
            {errors.firstName && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.firstName}
              </Typography>
            )}
          </Box>

          <Box>
            <TextField
              className="textfiled-area"
              placeholder="Last Name"
              size="medium"
              name="lastName"
              value={formData.lastName}
              onChange={this.handleChange}
            />
            {errors.lastName && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.lastName}
              </Typography>
            )}
          </Box>
        </Box>

        <Box className="Sizepaper">
          <Box>
            <TextField
              className="textfiled-area"
              placeholder="Email"
              size="medium"
              name="email"
              value={formData.email}
              onChange={this.handleChange}
              sx={{ width: "290px" }}
            />
            {errors.email && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.email}
              </Typography>
            )}
          </Box>

          <Box>
            <TextField
              className="textfiled-area"
              placeholder="Phone"
              size="medium"
              name="phone"
              value={formData.phone}
              onChange={this.handleChange}
            />
            {errors.phone && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.phone}
              </Typography>
            )}
          </Box>
        </Box>

        <Box>
          <TextareaAutosize
            className="holdervalue"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={this.handleChange}
            style={{
              maxWidth: "90%",
              color: "black",
              borderColor: errors.message ? "red" : "inherit",
              padding: "8px",
              fontSize: "16px",
              minHeight: "100px",
              maxHeight: "500px",
              overflowY: "auto",
            }}
          />
          {errors.message && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {errors.message}
            </Typography>
          )}
        </Box>

        <Button
          className="submit-btn"
          variant="contained"
          color="primary"
          type="submit"
        >
          Send Message
        </Button>
      </Box>
    );
  }
}

export default ContactForm;
