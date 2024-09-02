import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppAppBar from "../../components/AppAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import bgimage from "../../bgimage.jpg";
import bgimage_right_mode from "../../bgimage-right-mode.png"
import { useColorMode } from '../../context/ColorModeContext';


function FormPatient() {

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box
      sx={{
        backgroundImage:
        mode === "light" ? `url(${bgimage})` : `url(${bgimage_right_mode})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Container
          component="main"
          maxWidth="sm"
          style={{
            marginTop: "90px",
            marginBottom: "16px",
            borderRadius: "16px",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={{ marginTop: "10px", borderRadius: "16px" }}
          >
            <Typography component="h1" variant="h5">
              Formulaire Patient
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="nom"
                    label="Numéro de sécurité sociale"
                    name="nom"
                    autoComplete="family-name"
                    size="small"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: mode === "light" ? "#FF3399" : "#00b8d4",
                      "&:hover": {
                        backgroundColor: mode === "light" ? "#ff1744" : "#1de9b6",
                      },
                    }}
                    style={{ borderRadius: "16px" }}
                  >
                    Recherche
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Numéro de sécurité sociale"
                    name="email"
                    autoComplete="email"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="nom"
                    label="Nom"
                    type="text"
                    id="nom"
                    autoComplete="new-password"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="prenom"
                    label="Prénom"
                    type="text"
                    size="small"
                    id="prenom"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date naissance"
                      name="date"
                      size="small" // Corrected syntax here
                      onChange={handleSubmit}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth size="small" />
                      )}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="codePostal"
                    label="Code postal"
                    type="text"
                    size="small"
                    id="codePostal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="ville"
                    label="Ville"
                    type="text"
                    size="small"
                    id="ville"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    name="nom"
                    label="Téléphone"
                    type="text"
                    id="nom"
                    autoComplete="new-password"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                href="/prediagnostique"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: mode === "light" ? "#FF3399" : "#00b8d4",
                  "&:hover": {
                    backgroundColor: mode === "light" ? "#ff1744" : "#1de9b6",
                  },
                }}
                style={{ borderRadius: "16px" }}
              >
                SOUMETTRE
              </Button>
            </Box>
          </Box>
          <br></br>
        </Container>      
    </Box>
    </ThemeProvider>

  );
}

export default FormPatient;
