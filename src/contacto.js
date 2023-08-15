import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    legalProblem: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the email content
    const emailContent = `
      Name: ${formData.name}
      Address: ${formData.address}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
      Legal Problem: ${formData.legalProblem}
    `;

    // Send the email
    window.location.href = `mailto:contacto@yt-global-brokers.com?subject=Contact Form Submission&body=${encodeURIComponent(
      emailContent
    )}`;
  };

  const contactFormRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0, // The ratio of the element's visibility before triggering the animation
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const elements =
      contactFormRef.current.querySelectorAll(".animate-fade-in");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box sx={{ width: "100%", textAlign: "center" }} ref={contactFormRef}>
      <Box
        sx={{
          backgroundColor: "#83072D",
          justifyContent: "center",
          alignContent: "center",
        }}
        className="animate-fade-in"
      >
        <Typography
          variant="h4"
          gutterBottom
          color="white"
          alignContent="center"
          sx={{ padding: { md: "3rem", xs: "2rem" } }}
        >
          Contactanos
        </Typography>
      </Box>
      <Box sx={{ paddingX: { xs: "5%", md: "10%" }, paddingY: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="animate-fade-in"
        ></Typography>

        <form onSubmit={handleSubmit} className="animate-fade-in">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} className="animate-fade-in">
              <TextField
                fullWidth
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className="animate-fade-in">
              <TextField
                fullWidth
                label="Direccion"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className="animate-fade-in">
              <TextField
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className="animate-fade-in">
              <TextField
                fullWidth
                label="Numero de Telefono"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} className="animate-fade-in">
              <TextField
                fullWidth
                label="Descripcion"
                name="legalProblem"
                multiline
                rows={4}
                value={formData.legalProblem}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              className="animate-fade-in"
            >
              {/* Placeholder Grid item to occupy the space on larger screens */}
            </Grid>
            <Grid item xs={12} className="animate-fade-in">
              <Button
                type="submit"
                variant="contained"
                className="custom-button"
                fullWidth
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
