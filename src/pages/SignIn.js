// SignIn.js
import React from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import { useColorMode } from '../context/ColorModeContext';
import logo from "../logo.png";
import bgimage from "../bgimage.jpg";
import bgimage_right_mode from "../bgimage-right-mode.png";
import AppAppBar from "../components/AppAppBar";
import { Link } from "react-router-dom";

function SignIn() {
  const { mode, toggleColorMode } = useColorMode();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    const userRole = email === "doctor@gmail.com" ? "Doctor" : "Nurse";

    if (userRole === "Doctor") {
      window.location.href = "/home";
    } else {
      window.location.href = "/homeinfirmier";
    }
  };

  return (
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
      <CssBaseline />
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="avatar"
            style={{ width: "30%", height: "30%" }}
          />
          <Typography component="h1" variant="h5">
            Se connecter
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
              size="small"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              size="small"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: mode === "light" ? "#FF3399" : "#00b8d4",
                "&:hover": {
                  backgroundColor: mode === "light" ? "#ff1744" : "#1de9b6",
                },
              }}
              style={{
                marginTop: "16px",
                marginBottom: "16px",
                borderRadius: "16px",
              }}
            >
              Je me connecte
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ color: mode === "light" ? "#000" : "#fff" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2" style={{ color: mode === "light" ? "#000" : "#fff" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
