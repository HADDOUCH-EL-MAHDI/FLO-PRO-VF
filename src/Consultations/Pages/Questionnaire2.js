import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppAppBar from "../../components/AppAppBar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import bgimage from "../../bgimage.jpg";
import { useColorMode } from '../../context/ColorModeContext';


function Questionnaire2() {
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


  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleNextClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
      <Container maxWidth="lg" style={{ marginTop: "0px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <h1 style={{ color: "white", marginTop: "90px" }}>Questionnaire</h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
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
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    type="submit"
                    href="/prediagnostique"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor:
                            mode === "light" ? "#FF3399" : "#00b8d4",
                          "&:hover": {
                            backgroundColor:
                              mode === "light" ? "#ff1744" : "#1de9b6",
                          },
                    }}
                    style={{ borderRadius: "16px" }}
                  >
                    Retour à la sélection d'âge
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FormControl style={{ color: "white" }}>
                    <FormLabel
                      id="demo-controlled-radio-buttons-group"
                      style={{ color: "white" }}
                    >
                      Avez-vous l'impresion que votre situation est désespérée ?
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="oui"
                        control={<Radio />}
                        label="Oui"
                      />
                      <FormControlLabel
                        value="non"
                        control={<Radio />}
                        label="Non"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      type="submit"
                      href="/questionnaire1"
                      variant="contained"
                      sx={{
                        ml: 2,
                        mt: 2,
                        mb: 2,
                        backgroundColor:
                        mode === "light" ? "#FF3399" : "#00b8d4",
                      "&:hover": {
                        backgroundColor:
                          mode === "light" ? "#ff1744" : "#1de9b6",
                      },
                      }}
                      style={{ borderRadius: "16px" }}
                    >
                      Précédent
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        ml: 2,
                        mt: 2,
                        mb: 2,
                        backgroundColor:
                        mode === "light" ? "#FF3399" : "#00b8d4",
                      "&:hover": {
                        backgroundColor:
                          mode === "light" ? "#ff1744" : "#1de9b6",
                      },
                      }}
                      style={{ borderRadius: "16px" }}
                      onClick={handleNextClick}
                    >
                      Suivant
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <br></br>
      </Container>
      <Dialog
       open={open} onClose={handleClose} 
       PaperProps={{
        sx: {
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        },
      }}
       >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#607d8b",
            color: "white",

          }}
        >
          <h2>Résultat du questionnaire</h2>
        </Grid>

        <DialogContent>
          <h3>
            Votre score est: très forte suspicion de dépression
          </h3>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={12}>
              <Button
                fullWidth
                type="button"
                href="#"
                variant="contained"
                style={{
                  borderRadius: "16px",
                  backgroundColor:
                            mode === "light" ? "#FF3399" : "#00b8d4",
                          "&:hover": {
                            backgroundColor:
                              mode === "light" ? "#ff1744" : "#1de9b6",
                          },
                }}
              >
                Télécharger le récapitulatif des réponses
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                type="button"
                href="/conseils"
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                style={{
                  borderRadius: "16px",
                  backgroundColor:
                            mode === "light" ? "#FF3399" : "#00b8d4",
                          "&:hover": {
                            backgroundColor:
                              mode === "light" ? "#ff1744" : "#1de9b6",
                          },
                }}
              >
                Montrer le traitement
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                type="button"
                href="/questionsupplementaire"
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                style={{
                  borderRadius: "16px",
                  backgroundColor:
                            mode === "light" ? "#FF3399" : "#00b8d4",
                          "&:hover": {
                            backgroundColor:
                              mode === "light" ? "#ff1744" : "#1de9b6",
                          },
                }}
              >
                Question supplementaire
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Box>
    </ThemeProvider>
  );
}

export default Questionnaire2;
