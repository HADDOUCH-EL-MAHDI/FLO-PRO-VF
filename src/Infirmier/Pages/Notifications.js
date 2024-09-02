import React, { useState } from "react";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Pagination,
  Avatar,
  Typography,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Import de l'icône correcte
import AppAppBar from "../../components/AppAppBar";
import bgimage from "../../bgimage.jpg";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import PatientDataInfirmier from "../../PatientDataInfirmier.json";
import { useColorMode } from '../../context/ColorModeContext';

function Notifications() {
  const [page, setPage] = useState(1);
  const [patients, setPatients] = useState(PatientDataInfirmier);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const rowsPerPage = 5;

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

  // Function to generate avatar colors and initials
  const generateAvatar = (firstName, lastName) => {
    const initials = `${firstName[0]}${lastName[0]}`;
    const color = stringToColor(initials);
    return <Avatar sx={{ bgcolor: color }}>{initials.toUpperCase()}</Avatar>;
  };

  const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${
            mode === "light" ? bgimage : bgimage_right_mode
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "102.5vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container maxWidth="lg" style={{ marginTop: "20px" }}>
          <TableContainer component={Paper} sx={{boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)", borderRadius:"10px"}}>
            <Table>
              <TableHead sx={{ backgroundColor: "#FF3399" }}>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Nom</TableCell>
                  <TableCell>Prénom</TableCell>
                  <TableCell>Ordonnance</TableCell>
                  <TableCell sx={{display:"flex", justifyContent:"end"}}>Envoyer Notification</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients
                  .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                  .map((patient) => (
                    <TableRow
                      key={patient.id}
                      onClick={() => handleRowClick(patient)}
                    >
                      <TableCell>
                        {generateAvatar(patient.firstName, patient.lastName)}
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {patient.lastName}
                        </Typography>
                      </TableCell>
                      <TableCell>{patient.firstName}</TableCell>
                      <TableCell>{patient.ordonnance}</TableCell>
                      <TableCell>
  <Box sx={{ display: "flex", justifyContent: "end" }}>
    <IconButton color="primary">
      <NotificationsIcon /> {/* Icône de notification */}
    </IconButton>
  </Box>
</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Pagination
                count={Math.ceil(patients.length / rowsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </TableContainer>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Notifications;
