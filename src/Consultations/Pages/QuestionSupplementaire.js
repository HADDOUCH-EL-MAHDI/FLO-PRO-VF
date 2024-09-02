import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppAppBar from "../../components/AppAppBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Card } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import bgimage from "../../bgimage.jpg";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useColorMode } from '../../context/ColorModeContext';

function QuestionSupplementaire() {
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
      date: data.get("date"),
      ville: data.get("ville"),
      specialite: data.get("specialite"),
      entite: data.get("entite"),
      codepostale: data.get("codepostale"),
      adresse: data.get("adresse"),
    });
  };

  const mytheme = useTheme();
  const isSmallScreen = useMediaQuery(mytheme.breakpoints.down("sm"));

  const [checkedItems1, setCheckedItems1] = useState({
    cafard: false,
    tristesse: false,
    envieDePleurer: false,
    irritabilite: false,
    perteInteret: false,
  });

  const [checkedItems2, setCheckedItems2] = useState({
    baisseEstimeDeSoi: false,
    culpabilite: false,
    anxiete: false,
    difficulteConcentration: false,
    perteMemoire: false,
    incapacitéPrendreDecision: false,
    penseesMorbides: false,
  });

  const [checkedItems3, setCheckedItems3] = useState({
    agitation: false,
    perteEnergie: false,
    fatigue: false,
    sommeilPerturbe: false,
    perteAppetit: false,
    troublesDigestifs: false,
    mauxDeTete: false,
    diminutionDesirSexuel: false,
    douleursDiffuses: false,
    malDeDos: false,
  });

  const handleCheckboxChange = (event, setCheckedItems, checkedItems) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const checkedCount1 = Object.values(checkedItems1).filter(Boolean).length;
  const checkedCount2 = Object.values(checkedItems2).filter(Boolean).length;
  const checkedCount3 = Object.values(checkedItems3).filter(Boolean).length;
  const totalCheckedCount = checkedCount1 + checkedCount2 + checkedCount3;

  const [evaluationText, setEvaluationText] = useState("");

  const handleEvaluateDepression = () => {
    // Example: display a fixed score or calculation based on checked items
    setEvaluationText(
      `Le patient a ${totalCheckedCount * 2}/100 de dépression`
    );
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
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Container maxWidth="lg" style={{ marginTop: "0px" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8} sm={8} sx={{ display: "flex" }}>
              <h1
                style={{
                  color: "white",
                  marginLeft: isSmallScreen ? "0px" : "200px",
                  marginTop: "100px",
                }}
              >
                Questionnaire
              </h1>
            </Grid>
            <Grid item xs={4} sm={4} sx={{ display: "flex" }}>
              <Button
                type="submit"
                href="/questionnaire2"
                variant="contained"
                sx={{
                  backgroundColor: "#FF3399",
                  "&:hover": {
                    backgroundColor: "#ff1744",
                  },
                  marginRight: isSmallScreen ? "0px" : "90px",
                  marginTop: "100px",
                }}
                style={{ borderRadius: "16px" }}
              >
                Retour réponse
              </Button>
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
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        sx={{ mb: 2 }}
                        style={{
                          color: "white",
                        }}
                      >
                        Modifications de l'humeur
                      </FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="cafard"
                              checked={checkedItems1.cafard}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems1,
                                  checkedItems1
                                )
                              }
                              sx={{
                                color: "#ff1744",
                                "&.Mui-checked": { color: "#ff1744" },
                              }}
                            />
                          }
                          label="Cafard"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="tristesse"
                              checked={checkedItems1.tristesse}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems1,
                                  checkedItems1
                                )
                              }
                              sx={{
                                color: "#ffff00",
                                "&.Mui-checked": { color: "#ffff00" },
                              }}
                            />
                          }
                          label="Tristesse permanente pendant au moins deux semaines"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="envieDePleurer"
                              checked={checkedItems1.envieDePleurer}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems1,
                                  checkedItems1
                                )
                              }
                              sx={{
                                color: "#76ff03",
                                "&.Mui-checked": { color: "#76ff03" },
                              }}
                            />
                          }
                          label="Envie incontrôlable et fréquente de pleurer"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="irritabilite"
                              checked={checkedItems1.irritabilite}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems1,
                                  checkedItems1
                                )
                              }
                              sx={{
                                color: "#FF5733",
                                "&.Mui-checked": { color: "#FF5733" },
                              }}
                            />
                          }
                          label="Irritabilité"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="perteInteret"
                              checked={checkedItems1.perteInteret}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems1,
                                  checkedItems1
                                )
                              }
                              sx={{
                                color: "#33C4FF",
                                "&.Mui-checked": { color: "#33C4FF" },
                              }}
                            />
                          }
                          label="Perte totale d'intérêt pour les activités ordinairement agréables"
                          sx={{ color: "white" }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={12}>
                      <h3
                        style={{
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        Symptômes cochés : {checkedCount1}
                      </h3>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
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
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        sx={{ mb: 2 }}
                        style={{
                          color: "white",
                        }}
                      >
                        Troubles de la pensée
                      </FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="baisseEstimeDeSoi"
                              checked={checkedItems2.baisseEstimeDeSoi}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems2,
                                  checkedItems2
                                )
                              }
                              sx={{
                                color: "#ff1744",
                                "&.Mui-checked": { color: "#ff1744" },
                              }}
                            />
                          }
                          label="Baisse de l'estime de sol"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="culpabilite"
                              checked={checkedItems2.culpabilite}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems2,
                                  checkedItems2
                                )
                              }
                              sx={{
                                color: "#ffff00",
                                "&.Mui-checked": { color: "#ffff00" },
                              }}
                            />
                          }
                          label="Sentiment de culpabilité"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="anxiete"
                              checked={checkedItems2.anxiete}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems2,
                                  checkedItems2
                                )
                              }
                              sx={{
                                color: "#76ff03",
                                "&.Mui-checked": { color: "#76ff03" },
                              }}
                            />
                          }
                          label="Anxiété ou inquiétude excessive "
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="difficulteConcentration"
                              checked={checkedItems2.difficulteConcentration}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems2,
                                  checkedItems2
                                )
                              }
                              sx={{
                                color: "#FF5733",
                                "&.Mui-checked": { color: "#FF5733" },
                              }}
                            />
                          }
                          label="Difficulté de concentration"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="perteMemoire"
                              checked={checkedItems2.perteMemoire}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems2,
                                  checkedItems2
                                )
                              }
                              sx={{
                                color: "#33C4FF",
                                "&.Mui-checked": { color: "#33C4FF" },
                              }}
                            />
                          }
                          label="Perte de mémoire "
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="incapacitéPrendreDecision"
                              checked={checkedItems2.incapacitéPrendreDecision}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems2,
                                  checkedItems2
                                )
                              }
                              sx={{
                                color: "#d50000",
                                "&.Mui-checked": { color: "#d50000" },
                              }}
                            />
                          }
                          label="Incapacité à prendre des décisions "
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="penseesMorbides"
                              checked={checkedItems2.penseesMorbides}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems2,
                                  checkedItems2
                                )
                              }
                              sx={{
                                color: "#eceff1",
                                "&.Mui-checked": { color: "#eceff1" },
                              }}
                            />
                          }
                          label="Pensées morbide qui reviennent souvent "
                          sx={{ color: "white" }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={12}>
                      <h3
                        style={{
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        Symptômes cochés : {checkedCount2}
                      </h3>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
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
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        sx={{ mb: 2 }}
                        style={{
                          color: "white",
                        }}
                      >
                        Modifications de l'humeur
                      </FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="agitation"
                              checked={checkedItems3.agitation}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#ff1744",
                                "&.Mui-checked": { color: "#ff1744" },
                              }}
                            />
                          }
                          label="Agitation ou ralentissement des gestes de quotidien"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="perteEnergie"
                              checked={checkedItems3.perteEnergie}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#ffff00",
                                "&.Mui-checked": { color: "#ffff00" },
                              }}
                            />
                          }
                          label="Perte d'énergie "
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="fatigue"
                              checked={checkedItems3.fatigue}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#76ff03",
                                "&.Mui-checked": { color: "#76ff03" },
                              }}
                            />
                          }
                          label="Fatigue"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="sommeilPerturbe"
                              checked={checkedItems3.sommeilPerturbe}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#FF5733",
                                "&.Mui-checked": { color: "#FF5733" },
                              }}
                            />
                          }
                          label="Sommeil perturbé "
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="perteAppetit"
                              checked={checkedItems3.perteAppetit}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#33C4FF",
                                "&.Mui-checked": { color: "#33C4FF" },
                              }}
                            />
                          }
                          label="Perte ou augmentation de l'appétit"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="troublesDigestifs"
                              checked={checkedItems3.troublesDigestifs}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#d50000",
                                "&.Mui-checked": { color: "#d50000" },
                              }}
                            />
                          }
                          label="Troubles digestifs et maux de ventre"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="mauxDeTete"
                              checked={checkedItems3.mauxDeTete}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#eceff1",
                                "&.Mui-checked": { color: "#eceff1" },
                              }}
                            />
                          }
                          label="Maux de tête"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="diminutionDesirSexuel"
                              checked={checkedItems3.diminutionDesirSexuel}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#d500f9",
                                "&.Mui-checked": { color: "#d500f9" },
                              }}
                            />
                          }
                          label="Diminution du désir sexuel"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="douleursDiffuses"
                              checked={checkedItems3.douleursDiffuses}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#ffeb3b",
                                "&.Mui-checked": { color: "#ffeb3b" },
                              }}
                            />
                          }
                          label="Douleurs diffuses"
                          sx={{ color: "white" }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="malDeDos"
                              checked={checkedItems3.malDeDos}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  setCheckedItems3,
                                  checkedItems3
                                )
                              }
                              sx={{
                                color: "#76ff03",
                                "&.Mui-checked": { color: "#76ff03" },
                              }}
                            />
                          }
                          label="Mal de dos"
                          sx={{ color: "white" }}
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={12}>
                      <h3
                        style={{
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        Symptômes cochés : {checkedCount3}
                      </h3>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ display: "flex", justifyContent: "center"}}
          >
            <h1
              style={{
                color: "#ff1744",
                textAlign: "center",
              }}
            >
              Total des symptômes sélectionnés : {totalCheckedCount}
            </h1>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF3399",
                "&:hover": {
                  backgroundColor: "#ff1744",
                },
                borderRadius: "16px",
              }}
              onClick={handleEvaluateDepression}
            >
              Évaluer la dépression
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                backgroundColor: "transparent",
                padding: "20px",
                borderRadius: "10px",
                width: "40%",
              }}
            >
              <h2 style={{ textAlign: "center" ,color: "#000000",}}>{evaluationText}</h2>
            </Card>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default QuestionSupplementaire;
