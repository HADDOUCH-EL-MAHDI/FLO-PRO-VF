import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import AppAppBar from "../../components/AppAppBar";
import AddIcon from "@mui/icons-material/Add";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import {
  Box,
  Container,
  Card,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bgimage from "../../bgimage.jpg";
import corps from "../../corps.png";
import tete from "../../entete.png";
import jamb from "../../jamb.png";
import bras from "../../bras.png";
import coeur from "../../coeur.png";
import { useColorMode } from '../../context/ColorModeContext';


function Prediagnostique() {
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

  const [currentImage, setCurrentImage] = useState(corps);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: "0px",
          backgroundImage:
            mode === "light" ? `url(${bgimage})` : `url(${bgimage_right_mode})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "102.5vh",
        }}
      >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Container maxWidth="lg" style={{ marginTop: "0px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <h1 style={{ color: "white", marginTop: "90px" }}>
                Prédiagnostique
              </h1>
            </Grid>

            {/* Main content section */}
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                {/* Title inside the card */}
                <Typography
                  variant="h6"
                  color="white"
                  sx={{ textAlign: "center", marginBottom: "20px" }}
                >
                  Aidez-nous à établir un diagnostic précis. Sélectionnez la
                  zone de votre corps qui vous fait mal
                </Typography>

                <Grid container spacing={2}>
                  {/* Left column with text fields */}
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      label="Age"
                      defaultValue="2/08/1980 (34)"
                      variant="filled"
                      sx={{
                        backgroundColor: mode === "light" ? "white" : "#455a64",
                        marginBottom: "10px",
                        width: "200px",
                        borderRadius: "8px",
                      }}
                    />
                    <TextField
                      label="Gender"
                      defaultValue="Female"
                      variant="filled"
                      sx={{
                        backgroundColor: mode === "light" ? "white" : "#455a64",
                        marginBottom: "10px",
                        width: "200px",
                        borderRadius: "8px",
                      }}
                    />
                    <TextField
                      label="Weight and Height"
                      defaultValue="64kg"
                      variant="filled"
                      sx={{
                        backgroundColor: mode === "light" ? "white" : "#455a64",
                        marginBottom: "10px",
                        width: "200px",
                        borderRadius: "8px",
                      }}
                    />
                    <TextField
                      label="History"
                      defaultValue=""
                      variant="filled"
                      sx={{
                        backgroundColor: mode === "light" ? "white" : "#455a64",
                        marginBottom: "10px",
                        width: "200px",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>

                  {/* Center column with dynamic image */}
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={currentImage} // Display the current image
                      alt="Selected Body Part"
                      style={{ width: "200px", height: "auto" }}
                    />
                  </Grid>

                  {/* Right column with buttons */}
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        margin: "5px",
                        backgroundColor:
                          mode === "light" ? "#FF3399" : "#00b8d4",
                        "&:hover": {
                          backgroundColor:
                            mode === "light" ? "#ff1744" : "#1de9b6",
                        },
                      }}
                      onClick={() => setCurrentImage(tete)} // Update the image to 'tete'
                    >
                      Tête
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        margin: "5px",
                        backgroundColor:
                          mode === "light" ? "#FF3399" : "#00b8d4",
                        "&:hover": {
                          backgroundColor:
                            mode === "light" ? "#ff1744" : "#1de9b6",
                        },
                      }}
                      onClick={() => setCurrentImage(bras)} // Update the image to 'bras'
                    >
                      Bras
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        margin: "5px",
                        backgroundColor:
                          mode === "light" ? "#FF3399" : "#00b8d4",
                        "&:hover": {
                          backgroundColor:
                            mode === "light" ? "#ff1744" : "#1de9b6",
                        },
                      }}
                      onClick={() => setCurrentImage(jamb)} // Update the image to 'jamb'
                    >
                      Jambe
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        margin: "5px",
                        fontSize: "12px",
                        p: "10px",
                        backgroundColor:
                          mode === "light" ? "#FF3399" : "#00b8d4",
                        "&:hover": {
                          backgroundColor:
                            mode === "light" ? "#ff1744" : "#1de9b6",
                        },
                      }}
                      startIcon={<AddIcon />}
                      onClick={() => setCurrentImage(coeur)} // Update the image to 'coeur'
                    >
                      Toucher le squelette
                    </Button>
                    <Button
                      href="/questionnaire1"
                      fullWidth
                      variant="contained"
                      sx={{
                        margin: "5px",
                        fontSize: "12px",
                        p: "10px",
                        backgroundColor:
                          mode === "light" ? "#FF3399" : "#00b8d4",
                        "&:hover": {
                          backgroundColor:
                            mode === "light" ? "#ff1744" : "#1de9b6",
                        },
                      }}
                    >
                      Repondre au questionnaire
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <br></br>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Prediagnostique;
