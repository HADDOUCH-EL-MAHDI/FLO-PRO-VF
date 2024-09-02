import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useColorMode } from '../context/ColorModeContext';
import logo from "../logo.png";
import Copyright from "../components/Copyright";
import AppAppBar from "../components/AppAppBar";
import bgimage from "../bgimage.jpg";
import bgimage_right_mode from "../bgimage-right-mode.png";

function SignUp() {
  const { mode, toggleColorMode } = useColorMode();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: mode === 'light' ? `url(${bgimage})` : `url(${bgimage_right_mode})`,
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
            marginTop: "120px",
            borderRadius: "16px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
            backgroundColor: mode === "light" ? "#fff" : "#424242",
            padding: "16px",
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
                  <TextField
                    required
                    fullWidth
                    id="nom"
                    label="Nom"
                    name="nom"
                    autoComplete="family-name"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="prenom"
                    required
                    fullWidth
                    id="prenom"
                    label="Prénom"
                    size="small"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Adresse email"
                    name="email"
                    autoComplete="email"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Mot de passe"
                    type="password"
                    id="password"
                    size="small"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmpassword"
                    label="Confirme mot de passe"
                    type="password"
                    size="small"
                    id="confirmepassword"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                href="/nextsignup"
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 2,
                  backgroundColor: mode === 'light' ? "#FF3399" : "#00b8d4",
                  "&:hover": {
                    backgroundColor: mode === 'light' ? "#ff1744" : "#1de9b6",
                  },
                }}
                style={{ borderRadius: "16px" }}
              >
                Suivant
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="signin" variant="body2" style={{
                      color: mode === "light" ? "#000" : "#fff",
                      textDecoration:"none",
                    }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 2 }} />
          <br></br>
        </Container>
      </Box>
    </>
  );
}

export default SignUp;
