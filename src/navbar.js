import { Box, Button } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import logo from "./img/LogoNavBar.png";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        height:{xs: "120px" ,md:"175px"}
      }}
    >
      <Box sx={{ maxWidth: 300 }}>
        <img src={logo} alt="Image1" style={{ width: "100%", height: "100%" }} />
      </Box>
      <Toolbar sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              marginRight: "10px",
            }}
          ></Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              gap: ".5rem",
              width: "100%",
            }}
          >
            <Button
              sx={{
                fontFamily: "Sweet Sans Pro",
                fontSize: ".8rem",
                color: "inherit",
              }}
            >
              INICIO
            </Button>
            <Button
              sx={{
                fontFamily: "Sweet Sans Pro",
                fontSize: ".8rem",
                color: "inherit",
              }}
            >
              QUIENES SOMOS
            </Button>
            <Button
              sx={{
                fontFamily: "Sweet Sans Pro",
                fontSize: ".8rem",
                color: "inherit",
              }}
            >
              CONTACTANOS
            </Button>
            <Button
              sx={{
                fontFamily: "Sweet Sans Pro",
                fontSize: ".8rem",
                color: "inherit",
              }}
            >
              cuatro
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
