import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import AppAppBar from "../../components/AppAppBar";
import {
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BtnConsulter from "../../components/BtnConsulter";
import CardDataInfirmier from "../../CardDataInfirmier.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage from "../../bgimage.jpg";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import { useColorMode } from '../../context/ColorModeContext'
const CARDS_PER_PAGE = 3;

function Home_Infirmier() {
  const { mode, toggleColorMode } = useColorMode();

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#FF3399",
            },
            background: {
              default: "#f0f0f0",
              paper: "#ffffff",
            },
            text: {
              primary: "#000000",
              secondary: "#555555",
            },
          }
        : {
            primary: {
              main: "#FF3399",
            },
            background: {
              default: "#121212",
              paper: "#1E1E1E",
            },
            text: {
              primary: "#ffffff",
              secondary: "#ffffff",
            },
          }),
    },
  });


  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(CardDataInfirmier.length / CARDS_PER_PAGE) - 1)
    );
  };

  const currentCards = CardDataInfirmier.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: "0px",
          backgroundImage: `url(${
            mode === "light" ? bgimage : bgimage_right_mode
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Container maxWidth="lg" style={{ marginTop: "0px" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "#FF3399" : "#000000",
              }}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              <ArrowBackIosIcon style={{ fontSize: 40 }} />
            </IconButton>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              {currentCards.map((card, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={index}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderRadius: "16px",
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 100,
                        width: "20%",
                        display: "block",
                        margin: "auto",
                        objectFit: "contain",
                      }}
                      src={card.image}
                      alt="problème de chemain"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                      >
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <BtnConsulter size="small" href={card.buttonLink}>
                        {card.buttonText}
                      </BtnConsulter>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <IconButton
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "#FF3399" : "#000000",
              }}
              onClick={handleNextPage}
              disabled={(currentPage + 1) * CARDS_PER_PAGE >= CardDataInfirmier.length}
            >
              <ArrowForwardIosIcon style={{ fontSize: 40 }} />
            </IconButton>
          </Box>         
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home_Infirmier;
