import React from "react";
import "./Hero.css";
import { Box, Typography, Button } from "@mui/material";
import hero from "./img/Inversion.jpg";
import logo from "./img/hero.jpg";

const Hero = () => {
  return (
    <div className="image-overlay-container">
      <Box sx={{ width: "100%", height: {xs: "100%" ,md:"75%"},top:{xs: "120px" ,md:"175px"}}} position="relative">
        <img className="background-image" src={hero} alt="Image1" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            left: { xs: "15%", md: "8%" },
            right: { xs: "15%", md: "8%" },
            gap: { xs: 10, md: 20 },
            marginTop:{ xs: "5%", md: "7%" }
          }}
          position="absolute"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "60px",
              width: "100%",
              height: "100%",
              justifyContent: { xs: "center", md: "space-around" },
              alignItems: "center",
            }}
          >
            <Box maxWidth={400} display={"flex"} sx={{alignContent:{ xs: "center", md: "flex-start" },flexDirection:"column",gap:10}}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{fontSize:{ xs: "2.3rem", md: "3rem" }}}
                color={"white"}
                fontWeight={700}
                textAlign={"center"}
              >
                ¿Sú proyección de crecimiento requiere liquidez?
              </Typography>
              <Button
                size="large"
                color="primary"
                variant="outlined"
                sx={{ fontWeight: 600, borderWidth: "2.5px" }}
              >
                Contactanos
              </Button>
            </Box>
            <Box sx={{ maxWidth: 400, maxHeight: 400 }}>
              <Box
                sx={{
                  width: { xs: 310, md: 370 },
                  height: { xs: 310, md: 370 },
                  backgroundColor: "#83072D",
                  position: "relative",
                  borderRadius: "10%",
                }}
              >
                <img className="background-image2" src={logo} alt="Image1" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
