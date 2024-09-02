import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import bgimage from "../bgimage.jpg";
import bgimage_right_mode from "../bgimage-right-mode.png";

import logo from "../logo.png";
import Copyright from "../components/Copyright";
import AppAppBar from "../components/AppAppBar";
import { useColorMode } from '../context/ColorModeContext';

function NextSignUp() {
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


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      date: data.get("date"),
      ville: data.get("ville"),
      specialite: data.get("specialite"),
      entite: data.get("entite"),
      codepostale: data.get("codepostale"),
      adresse: data.get("adresse"),
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
          maxWidth="xs"
          sx={{
            marginTop: "90px",
            borderRadius: "16px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
            backgroundColor: theme.palette.background.paper,
            padding: "16px",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={{ marginTop: "10px", borderRadius: "16px" }}
          >
            <img
              src={logo}
              alt="avatar"
              style={{ width: "20%", height: "20%" }}
            />
            <Typography component="h1" variant="h5">
              S'inscrire
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date naissance"
                      name="date"
                      onChange={(newValue) => {
                        // Handle date change here
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-city"
                    name="ville"
                    required
                    fullWidth
                    id="ville"
                    label="Ville"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Choisissez une spécialité
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Choisissez une spécialité"
                      name="specialite"
                    >
                      <MenuItem value={10}>spécialité 1</MenuItem>
                      <MenuItem value={20}>spécialité 2</MenuItem>
                      <MenuItem value={30}>spécialité 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Choisissez une entité
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="entite"
                      label="Choisissez une entité"
                      name="entite"
                    >
                      <MenuItem value={10}>Entité 1</MenuItem>
                      <MenuItem value={20}>Entité 2</MenuItem>
                      <MenuItem value={30}>Entité 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="codepostale"
                    label="Code postale"
                    type="number"
                    id="codepostale"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="adresse"
                    label="Adresse"
                    type="text"
                    size="small"
                    id="adresse"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    type="submit"
                    href="/signup"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: mode === "light" ? "#FF3399" : "#00b8d4",
                      "&:hover": {
                        backgroundColor:
                          mode === "light" ? "#ff1744" : "#1de9b6",
                      },
                    }}
                    style={{ borderRadius: "16px" }}
                  >
                    Avant
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    type="submit"
                    href="/nextsignup"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: mode === "light" ? "#FF3399" : "#00b8d4",
                      "&:hover": {
                        backgroundColor:
                          mode === "light" ? "#ff1744" : "#1de9b6",
                      },
                    }}
                    style={{ borderRadius: "16px" }}
                  >
                    Enregistrer
                  </Button>
                </Grid>
              </Grid>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="signin"
                    variant="body2"
                    style={{
                      color: theme.palette.text.primary,
                      textDecoration: "none",
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 2 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default NextSignUp;
