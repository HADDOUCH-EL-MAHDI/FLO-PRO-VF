import React, { useState } from "react";
import {
  Button,
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
  TableHead,
  Paper,
  TextField,
} from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import bgimage from "../../bgimage.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useColorMode } from '../../context/ColorModeContext';


const medicamentsData = {
  
  section1: [
    { name: "Medicament 1", description: "Description 1", type: "IRS" },
    { name: "Medicament 2", description: "Description 2", type: "IRS" },
  ],
  section2: [
    {
      name: "Phenelzine",
      description:
        "Used for treatment-resistant depression and anxiety disorders.",
      type: "MAOI",
    },
    {
      name: "Tranylcypromine",
      description:
        "Effective for major depressive disorder with atypical features.",
      type: "MAOI",
    },
    {
      name: "MARSILID",
      description: "Used for treatment-resistant depression.",
      type: "MAOI",
    },
    {
      name: "MOCLAMINE",
      description: "Used for treatment-resistant depression.",
      type: "MAOI",
    },
  ],
  section3: [
    { name: "Medicament 3", description: "Description 3", type: "Other" },
    { name: "Medicament 4", description: "Description 4", type: "Other" },
  ],
};

function DiagMedicament() {

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

  const [openSections, setOpenSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const [openSubSections, setOpenSubSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
    setOpenSubSections({ section1: false, section2: false, section3: false });
  };

  const toggleSubSection = (section) => {
    setOpenSubSections((prevOpenSubSections) => ({
      ...prevOpenSubSections,
      [section]: !prevOpenSubSections[section],
    }));
  };

  const addToBasket = (medicament) => {
    setPanier((prevPanier) => [
      ...prevPanier,
      { ...medicament, quantity1: 1, quantity2: 1, remark: "" },
    ]);
  };

  const updateBasket = (index, key, value) => {
    const newPanier = [...panier];
    newPanier[index][key] = value;
    setPanier(newPanier);
  };

  const [panier, setPanier] = useState([]);

  const handleNext = () => {
    // Sauvegarder les données du panier dans le localStorage
    localStorage.setItem("panier", JSON.stringify(panier));

    // Rediriger vers OrdonnanceMedicale
    window.location.href = "/ordonnancemedicale";
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box
      sx={{
        marginTop: "0px",
        backgroundImage: mode === "light" ? `url(${bgimage})` : `url(${bgimage_right_mode})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "110vh",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
      <Container maxWidth="lg" style={{ marginTop: "0px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "120px",
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
                Diagnostique Médicament
              </Typography>

              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    flexDirection: "column",
                  }}
                >
                  {/* Section 1 */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleSection("section1")}
                  >
                    <strong style={{ color: "#76ff03" }}>
                      1/ Les inhibiteurs de la recapture de la sérotonine (IRS)
                    </strong>
                  </Typography>
                  {openSections.section1 && (
                    <>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          marginBottom: "10px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleSubSection("section1")}
                      >
                        1/1 Antidépresseurs inhibiteurs de la recapture de la
                        sérotonine
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          marginBottom: "10px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleSubSection("section1")}
                      >
                        1/2 Antidépresseurs inhibiteurs de la recapture de la
                        sérotonine et de la noradrénaline
                      </Typography>
                    </>
                  )}
                  {openSubSections.section1 && (
                    <TableContainer
                      component={Paper}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <Table>
                        <TableHead>
                          <TableRow sx={{ backgroundColor: "#607d8b" }}>
                            <TableCell sx={{ color: "white" }}>
                              <strong>Name</strong>
                            </TableCell>
                            <TableCell
                              sx={{ color: "white", textAlign: "center" }}
                            >
                              <strong>Description</strong>
                            </TableCell>
                            <TableCell
                              sx={{ color: "white", textAlign: "center" }}
                            >
                              <strong>Type</strong>
                            </TableCell>
                            <TableCell
                              sx={{ color: "white", textAlign: "right" }}
                            >
                              <strong>Action</strong>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {medicamentsData.section1.map((med, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ color: "white" }}>
                                {med.name}
                              </TableCell>
                              <TableCell
                                sx={{ color: "white", textAlign: "center" }}
                              >
                                {med.description}
                              </TableCell>
                              <TableCell
                                sx={{ color: "white", textAlign: "center" }}
                              >
                                {med.type}
                              </TableCell>
                              <TableCell
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => addToBasket(med)}
                                  style={{
                                    backgroundColor: "#795548",
                                  }}
                                >
                                  Ajouter au panier
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}

                  {/* Section 2 */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleSection("section2")}
                  >
                    <strong style={{ color: "#76ff03" }}>
                      2/ Les imipraminiques et les IMAO
                    </strong>
                  </Typography>
                  {openSections.section2 && (
                    <>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          marginBottom: "10px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleSubSection("section2")}
                      >
                        2/1 Antidépresseurs IMAO
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          marginBottom: "10px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleSubSection("section2")}
                      >
                        2/2 Antidépresseurs imipraminiques
                      </Typography>
                    </>
                  )}
                  {openSubSections.section2 && (
                    <TableContainer
                      component={Paper}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <Table>
                        <TableHead>
                          <TableRow sx={{ backgroundColor: "#607d8b" }}>
                            <TableCell sx={{ color: "white" }}>
                              <strong>Name</strong>
                            </TableCell>
                            <TableCell sx={{ color: "white" }}>
                              <strong>Description</strong>
                            </TableCell>
                            <TableCell sx={{ color: "white" }}>
                              <strong>Type</strong>
                            </TableCell>
                            <TableCell
                              sx={{ color: "white", textAlign: "right" }}
                            >
                              <strong>Action</strong>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {medicamentsData.section2.map((med, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ color: "white" }}>
                                {med.name}
                              </TableCell>
                              <TableCell sx={{ color: "white" }}>
                                {med.description}
                              </TableCell>
                              <TableCell sx={{ color: "white" }}>
                                {med.type}
                              </TableCell>
                              <TableCell
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => addToBasket(med)}
                                  style={{
                                    backgroundColor: "#795548",
                                  }}
                                >
                                  Ajouter au panier
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}

                  {/* Section 3 */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleSection("section3")}
                  >
                    <strong style={{ color: "#76ff03" }}>
                      3/ Les autres antidépresseurs
                    </strong>
                  </Typography>
                  {openSections.section3 && (
                    <>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          marginBottom: "10px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleSubSection("section3")}
                      >
                        3/1 Antidépresseurs tricycliques
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          marginBottom: "10px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleSubSection("section3")}
                      >
                        3/2 Antidépresseurs atypiques
                      </Typography>
                    </>
                  )}
                  {openSubSections.section3 && (
                    <TableContainer
                      component={Paper}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <Table>
                        <TableHead>
                          <TableRow sx={{ backgroundColor: "#607d8b" }}>
                            <TableCell sx={{ color: "white" }}>
                              <strong>Name</strong>
                            </TableCell>
                            <TableCell sx={{ color: "white" }}>
                              <strong>Description</strong>
                            </TableCell>
                            <TableCell sx={{ color: "white" }}>
                              <strong>Type</strong>
                            </TableCell>
                            <TableCell
                              sx={{ color: "white", textAlign: "right" }}
                            >
                              <strong>Action</strong>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody sx={{ color: "white" }}>
                          {medicamentsData.section3.map((med, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ color: "white" }}>
                                {med.name}
                              </TableCell>
                              <TableCell sx={{ color: "white" }}>
                                {med.description}
                              </TableCell>
                              <TableCell sx={{ color: "white" }}>
                                {med.type}
                              </TableCell>
                              <TableCell
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => addToBasket(med)}
                                  style={{
                                    backgroundColor: "#795548",
                                  }}
                                >
                                  Ajouter au panier
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </Grid>
              </Grid>

              {/* Panier */}
              <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                <Grid item xs={12}>
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
                          <TableRow key={index}>
                            <TableCell sx={{ color: "white" }}>
  {med.name}
</TableCell>
<TableCell>
  <TextField
    type="number"
    value={med.quantity1}
    onChange={(e) => updateBasket(index, "quantity1", e.target.value)}
    size="small"
    sx={{
      backgroundColor: "white",
      borderRadius: "4px",
      color: "primary.main", // Use theme's primary color for text
      "& .MuiInputBase-input": {
        color: "#ff3d00", // Adjust input text color if necessary
      },
    }}
  />
</TableCell>

                            <TableCell>
                              <TextField
                                type="number"
                                value={med.quantity2}
                                onChange={(e) =>
                                  updateBasket(
                                    index,
                                    "quantity2",
                                    e.target.value
                                  )
                                }
                                size="small"
                                sx={{
                                  backgroundColor: "white",
                                  borderRadius: "4px",
                                  color: "primary.main", // Use theme's primary color for text
                                  "& .MuiInputBase-input": {
                                    color: "#ff3d00", // Adjust input text color if necessary
                                  },
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                type="text"
                                value={med.remark}
                                onChange={(e) =>
                                  updateBasket(index, "remark", e.target.value)
                                }
                                size="small"
                                sx={{
                                  backgroundColor: "white",
      borderRadius: "4px",
      color: "primary.main", // Use theme's primary color for text
      "& .MuiInputBase-input": {
        color: "#ff3d00", // Adjust input text color if necessary
      },
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
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
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Grid
                    container
                    spacing={2}
                    style={{
                      display: "flex",
                      justifyContent: "center", // Corrected to "center"
                    }}
                  >
                    <Grid item xs={12} sm={2}>
                      {panier.length > 0 && (
                        <Button
                          onClick={handleNext}
                          href="/ordonnancemedicale"
                          fullWidth
                          type="submit"
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
                          Next
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                      <Button
                        fullWidth
                        type="submit"
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
                        type="submit"
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
                        type="submit"
                        variant="contained"
                        href="/diagmedicament"
                        sx={{
                          mt: 2,
                          mb: 2,
                          backgroundColor:
                          mode === "light" ? "#FF3399" : "#00b8d4",
                        "&:hover": {
                          backgroundColor:
                            mode === "light" ? "#ff1744" : "#1de9b6",
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

export default DiagMedicament;
