import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import hero from "./img/Hero1.jpg";

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid
      container
      sx={{ paddingX: { xs: "5%", md: "10%" }, paddingY: "5%" }}
      spacing={8}
    >
      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <img
            style={{
              width: "100%",
              height: "80%",
              borderRadius: "2rem",
              boxShadow: isHovered
                ? "0px 0px 20px rgba(131, 7, 45, 0.8)"
                : "0px 0px 10px rgba(131, 7, 45, 0.5)",
              transition: "box-shadow 0.3s",
            }}
            src={hero}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
          flexDirection={"column"}
        >
          <Typography
            textAlign={"center"}
            variant="h3"
            gutterBottom
            fontWeight={600}
          >
            Nuestra misión
          </Typography>
          <Typography
            textAlign={"center"}
            variant="h5"
            gutterBottom
            fontWeight={500}
          >
            Párrafo. Haz clic aquí para agregar tu propio texto y editarlo.
            Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar
            tu contenido y cambiar la fuente. En este espacio puedes contar tu
            historia y permitir que los usuarios sepan más sobre ti.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;

