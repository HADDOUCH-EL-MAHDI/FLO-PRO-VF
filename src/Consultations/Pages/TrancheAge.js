import React, { useState, useEffect, useRef } from "react";import Grid from "@mui/material/Grid";
import AppAppBar from "../../components/AppAppBar";
import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BtnConsulter from "../../components/BtnConsulter";
import enfant from "../../enfant.png";
import adolescent from "../../adolescent.png";
import adulte from "../../adulte.png";
import bgimage from "../../bgimage.jpg";
import agee from "../../agee.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import { useColorMode } from '../../context/ColorModeContext';

function TrancheAge() {
  const { mode, toggleColorMode } = useColorMode();

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#FF3399" },
            background: { default: "#f0f0f0", paper: "#ffffff" },
            text: { primary: "#000000", secondary: "#555555" },
          }
        : {
            primary: { main: "#FF3399" },
            background: { default: "#121212", paper: "#1E1E1E" },
            text: { primary: "#ffffff", secondary: "#ffffff" },
          }),
    },
  });

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
        minHeight: "102.5vh",
      }}
    >
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
      <Container maxWidth="lg" style={{ marginTop: "0px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <h1 style={{ color: "white", marginTop: "100px" }}>
              Nouvelle consultation
            </h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 345, borderRadius: "16px" ,boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",}}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "20%",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",                  
                }}
                src={enfant}
                alt="Enfant"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Enfant
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <BtnConsulter size="small" />
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 345, borderRadius: "16px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)", }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "20%",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",
                }}
                src={adolescent}
                alt="Adolescent"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Adolescent
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <BtnConsulter size="small" />
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 345, borderRadius: "16px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)", }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "20%",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",
                }}
                src={adulte}
                alt="Adulte"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Adulte
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <BtnConsulter size="small" />
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={{ width: 345, borderRadius: "16px",boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)" }}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "20%",
                  display: "block",
                  margin: "auto",
                  objectFit: "contain",
                }}
                src={agee}
                alt="Agée"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  Agée
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <BtnConsulter href="/formpatient" size="small" />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </ThemeProvider>
  );
}

export default TrancheAge;
