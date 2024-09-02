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
  Modal,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AppAppBar from "../../components/AppAppBar";
import bgimage from "../../bgimage.jpg";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import patientsData from "../../PatientsDoctor.json"; // Import the JSON data
import { useColorMode } from "../../context/ColorModeContext";

function MesPatients() {
  const [page, setPage] = useState(1);
  const [patients, setPatients] = useState(patientsData);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
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
    let i;
    for (i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleEditPatient = (patient) => {
    setSelectedPatient(patient);
    setOpenEditModal(true);
  };

  const handleDeletePatient = (patient) => {
    setSelectedPatient(patient);
    setOpenDeleteDialog(true);
  };

  const confirmDeletePatient = () => {
    setPatients(patients.filter((p) => p.id !== selectedPatient.id));
    setOpenDeleteDialog(false);
  };

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setSelectedPatient({ ...selectedPatient, [name]: value });
  };

  const savePatientDetails = () => {
    setPatients(
      patients.map((patient) =>
        patient.id === selectedPatient.id ? selectedPatient : patient
      )
    );
    setOpenEditModal(false);
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
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
              borderRadius: "10px",
            }}
          >
            <Table>
              <TableHead sx={{ backgroundColor: "#FF3399" }}>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Nom</TableCell>
                  <TableCell>Prénom</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Téléphone</TableCell>
                  <TableCell>Traitement</TableCell>
                  <TableCell>Date de création</TableCell>
                  <TableCell>Actions</TableCell>
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
                      <TableCell>{patient.email}</TableCell>
                      <TableCell>{patient.phone}</TableCell>
                      <TableCell>{patient.treatment}</TableCell>
                      <TableCell>{patient.createdDate}</TableCell>
                      <TableCell>
                        <IconButton
                          color="primary"
                          onClick={() => handleEditPatient(patient)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="secondary"
                          onClick={() => handleDeletePatient(patient)}
                        >
                          <DeleteIcon />
                        </IconButton>
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
      {/* Edit Patient Modal */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            backgroundColor: "#607d8b",
            color: "white",
            textAlign: "center",
          }}
        >
          Modifier les détails du patient
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Nom"
            name="lastName"
            value={selectedPatient?.lastName || ""}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Prénom"
            name="firstName"
            value={selectedPatient?.firstName || ""}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={selectedPatient?.email || ""}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Téléphone"
            name="phone"
            value={selectedPatient?.phone || ""}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Traitement"
            name="treatment"
            value={selectedPatient?.treatment || ""}
            onChange={handleEditChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "#607d8b",
              "&:hover": {
                backgroundColor: "#455a64",
              },
              color: "white",
            }}
            style={{ borderRadius: "10px" }}
            onClick={() => setOpenEditModal(false)}
          >
            Annuler
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={savePatientDetails}
            style={{ borderRadius: "10px" }}
          >
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        sx={{
          borderRadius: "10px",
          boxShadow: 16,
        }}
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle
          sx={{
            backgroundColor: "#607d8b",
            color: "white",
            textAlign: "center",
          }}
        >
          Supprimer le patient
        </DialogTitle>
        <DialogContent sx={{ marginTop: "20px" }}>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer {selectedPatient?.firstName}{" "}
            {selectedPatient?.lastName} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "#607d8b",
              "&:hover": {
                backgroundColor: "#455a64",
              },
              color: "white",
            }}
            style={{ borderRadius: "10px" }}
            onClick={() => setOpenDeleteDialog(false)}
          >
            Annuler
          </Button>
          <Button
            onClick={confirmDeletePatient}
            sx={{
              backgroundColor: "#FF0000",
              "&:hover": {
                backgroundColor: "#ff1744",
              },
              color: "white",
            }}
            style={{ borderRadius: "10px" }}
          >
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default MesPatients;
