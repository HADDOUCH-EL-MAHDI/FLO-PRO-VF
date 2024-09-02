import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import bgimage from "../../bgimage.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useColorMode } from '../../context/ColorModeContext';

function OrdonnanceMedicale() {
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


  // État pour le panier
  const [panier, setPanier] = useState([]);

  // Récupérer le panier depuis localStorage lors du chargement du composant
  useEffect(() => {
    const panierData = localStorage.getItem("panier");
    if (panierData) {
      setPanier(JSON.parse(panierData));
    }
  }, []);

  // Optionnel : Nettoyage de localStorage lorsque le composant est démonté
  useEffect(() => {
    return () => {
      localStorage.removeItem("panier");
    };
  }, []);

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
                marginBottom: "10px",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
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
                    backgroundColor: "#f50057",
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
                  Ordonnance Médicale
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "10px",
                    backgroundColor: mode === "light" ? "#FF3399" : "#607d8b",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  Panier
                </Typography>
                <TableContainer
                  component={Paper}
                  sx={{ backgroundColor: "transparent" }}
                >
                  <Table>
                    <TableBody>
                      {panier.map((med, index) => (
                        <React.Fragment key={index}>
                          <TableRow>
                            <TableCell sx={{ color: "white" }}>
                              {med.name}
                            </TableCell>
                            <TableCell
                              sx={{ color: "white", textAlign: "center" }}
                            >
                              {med.quantity1}
                            </TableCell>
                            <TableCell
                              sx={{ color: "white", textAlign: "center" }}
                            >
                              {med.quantity2}
                            </TableCell>
                            <TableCell
                              sx={{ color: "white", textAlign: "center" }}
                            >
                              {med.remark}
                            </TableCell>
                            <TableCell
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Button
                                variant="contained"
                                color="secondary"
                                style={{ backgroundColor: "#795548" }}
                                onClick={() =>
                                  setPanier(
                                    panier.filter((_, i) => i !== index)
                                  )
                                }
                              >
                                Supprimer
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              sx={{
                                color: "white",
                                textAlign: "left",
                                paddingLeft: "16px",
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ color: "#76ff03" }}
                              >
                                Utilisation: 1 fois par jour pondant une semaine{" "}
                                {med.usage}{" "}
                                {/* This is the new line showing the usage instructions */}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Button
                  type="submit"
                  href="/bilan"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: mode === "light" ? "#FF3399" : "#00b8d4",
                    "&:hover": {
                      backgroundColor: mode === "light" ? "#ff1744" : "#1de9b6",
                    },
                  }}
                  style={{ borderRadius: "16px", alignSelf: "center" }}
                >
                  Faire le Bilan
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default OrdonnanceMedicale;
