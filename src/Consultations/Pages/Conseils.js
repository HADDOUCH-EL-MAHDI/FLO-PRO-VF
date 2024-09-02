import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AppAppBar from "../../components/AppAppBar";
import bgimage from "../../bgimage.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useColorMode } from '../../context/ColorModeContext';

function Conseils() {
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
          backgroundImage:
            mode === "light" ? `url(${bgimage})` : `url(${bgimage_right_mode})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "110vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",          
        }}
      >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Container maxWidth="lg" style={{ marginTop: "0px" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "200px",
                marginLeft: "auto",
                marginRight: "auto",                
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
                }}
              >
                <Button
                  type="submit"
                  href="/questionnaire2"
                  variant="contained"
                  sx={{
                    backgroundColor: "#f44336",
                    "&:hover": {
                      backgroundColor: "#ff1744",
                    },
                    color: "#fff",
                    marginBottom: "20px",
                    alignSelf: "flex-start",
                  }}
                  style={{ borderRadius: "8px" }}
                >
                  Retour à la sélection de questionnaire
                </Button>

                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  Conseils pour se sentir mieux au quotidien
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "white", marginBottom: "10px" }}
                >
                  <strong style={{ color: "#76ff03" }}>
                    Écoutez votre corps :
                  </strong>{" "}
                  Si vous vous sentez fatigué(e), triste ou avez du mal à
                  dormir, ne les ignorez pas.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "white", marginBottom: "10px" }}
                >
                  <strong style={{ color: "#76ff03" }}>
                    Organisez votre journée :
                  </strong>{" "}
                  Une routine quotidienne peut vous aider à vous sentir plus en
                  contrôle.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "white", marginBottom: "10px" }}
                >
                  <strong style={{ color: "#76ff03" }}>
                    Prenez du temps pour vous :
                  </strong>{" "}
                  Des activités comme la méditation ou le yoga peuvent vraiment
                  aider à apaiser le stress.
                </Typography>

                <Typography variant="body1" sx={{ color: "white" }}>
                  <strong style={{ color: "#76ff03" }}>
                    Entourez-vous de soutien :
                  </strong>{" "}
                  Parlez à vos proches, partagez ce que vous ressentez. Cela
                  peut faire toute la différence.
                </Typography>

                <Grid container spacing={4}>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 2,
                        mb: 2,
                        backgroundColor: "#FF3399",
                        "&:hover": {
                          backgroundColor: "#ff1744",
                        },
                        display: "flex",
                        alignItems: "center",
                      }}
                      style={{ borderRadius: "16px" }}
                    >
                      Diag conseil
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      href="/conseilsalimentaire"
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 2,
                        mb: 2,
                        backgroundColor: "#FF3399",
                        "&:hover": {
                          backgroundColor: "#ff1744",
                        },
                        display: "flex",
                        alignItems: "center",
                      }}
                      style={{ borderRadius: "16px" }}
                    >
                      Diag conseil alimentaire
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      href="/diagmedicament"
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 2,
                        mb: 2,
                        backgroundColor: "#FF3399",
                        "&:hover": {
                          backgroundColor: "#ff1744",
                        },
                        display: "flex",
                        alignItems: "center",
                      }}
                      style={{ borderRadius: "16px" }}
                    >
                      Diag medicament
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Conseils;
