import React from "react";
import "./Hero.css";
import { Box, Typography, Button } from "@mui/material";
import hero from "./img/Hero1.jpg";
import logo from "./img/LogoHorizontak.png";

const Hero = () => {
  return (
    <div className="image-overlay-container">
      <Box sx={{ width: "100%", height: "100%" }} position="relative">
        <img className="background-image" src={hero} alt="Image1" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            top: "7%",
            left: { xs: "5%", md: "8%" },
            right: { xs: "5%", md: "8%" },
            gap: "100px",
          }}
          position="absolute"
        >
          <Box sx={{ maxWidth: 400 }}>
            <img
              src={logo}
              alt="Image"
              style={{ width: "70%", height: "70%" }}
            />
          </Box>
          <Box>
            <Box>
              <Typography
                variant="h3"
                gutterBottom
                color={"white"}
                fontWeight={700}
              >
                sfonndfif
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                color={"white"}
                fontWeight={500}
                paddingBottom="1.5rem"
              >
                ddnvolnd
              </Typography>
              <Button
                size="large"
                color="primary"
                variant="outlined"
                sx={{ fontWeight: 600, borderWidth: "2.5px" }}
              >
                Bienkfmno
              </Button>
            </Box>
            <Box>
                
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
