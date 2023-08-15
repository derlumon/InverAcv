import { Box, Typography } from "@mui/material";
import React from "react";


function Ubicanos() {


  return (
    <Box sx={{ textAlign: "center", width: "100%", gap: "30rem" }}>
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
          Ubicanos
        </Typography>
      </Box>
      <Box
        sx={{
          paddingX: { xs: "5%", md: "10%" },
          paddingBottom: "5%",
      
        }}
      >
      
        <iframe
          title="Mapa de Google"
          width="100%"
          height="450px"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=Av de las Fuentes 41a, Lomas de San Isidro, 53950 Naucalpan de Juárez, Méx.'S&output=embed`}
          allowFullScreen
        ></iframe>
        
        
      </Box>
      <Box
        sx={{
          backgroundColor: "#83072D",
          justifyContent: "center",
          alignContent: "center",
          padding: { md: "3rem", xs: "2rem" } 
        }}
        className="animate-fade-in"
      ><Typography
      variant="h4"
      sx={{
        color: "white",
        marginTop: "1.5rem",
        fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
      }}
    >
     Av. de Las Fuentes 41a piso 12, Lomas de Tecamachalco, Naucalpan de Juárez. EDOMEX. CP. 53950
    </Typography></Box>
    
    </Box>
  );
}

export default React.memo(Ubicanos);

