import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { useColorMode } from "../context/ColorModeContext"; // Utiliser le contexte

function LandingPage() {
  const { mode, toggleColorMode } = useColorMode(); // Accéder au mode et à la fonction

  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Footer />
      </Box>
    </>
  );
}

export default LandingPage;
