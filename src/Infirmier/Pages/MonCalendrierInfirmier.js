import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { fr } from "date-fns/locale";
import bgimage from "../../bgimage.jpg";
import bgimage_right_mode from "../../bgimage-right-mode.png";

import { Avatar, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import { useColorMode } from '../../context/ColorModeContext';

const locales = {
  "fr-FR": fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const patients = [
    { id: 1, firstName: "EL Mahdi", lastName: "HADDOUCH", ordonnance: "Description d'ordonnonce de patient içi" },
    { id: 2, firstName: "Ali", lastName: "HADDOUCH", ordonnance: "Description d'ordonnonce de patient içi" },
    { id: 3, firstName: "Mohammed", lastName: "HADDOUCH", ordonnance: "Description d'ordonnonce de patient içi" },
    { id: 4, firstName: "Abdellah", lastName: "Jnaini", ordonnance: "Description d'ordonnonce de patient içi" },
    // Add remaining patients here
  ];
  

function MonCalendrierInfirmier() {

  const [calendarType, setCalendarType] = useState("medications");
  const [selectedPatient, setSelectedPatient] = useState("");

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


  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const eventsWithCorrectDates = storedEvents.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }));
    setCalendarEvents(eventsWithCorrectDates);
  }, []);

  const handleCalendarTypeChange = (event) => {
    setCalendarType(event.target.value);
  };

  const handlePatientChange = (event) => {
    setSelectedPatient(event.target.value);
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 0,
          backgroundImage:
            mode === "light" ? `url(${bgimage})` : `url(${bgimage_right_mode})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "102.5vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Container component="main" maxWidth="lg">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginLeft: { xs: "10px", sm: "20px" },
              marginRight: { xs: "10px", sm: "20px" },
              marginBottom: "16px",
              borderRadius: "16px",
              backgroundColor:
                mode === "light"
                  ? "rgba(33, 150, 243, 1)"
                  : "rgba(0, 0, 0, 0.5)",
              color: "white",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
              overflowX: { xs: "auto", sm: "hidden" }, // Scroll horizontal sur petits écrans
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="calendar-type-label">Type de calendrier</InputLabel>
                    <Select
                      labelId="calendar-type-label"
                      value={calendarType}
                      onChange={handleCalendarTypeChange}
                      label="Type de calendrier"
                    >
                      <MenuItem value="medications">Médicaments</MenuItem>
                      <MenuItem value="consultations">Patientes</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={12} sm={6} sx={{ marginTop: "15px" }}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel id="patient-select-label">Sélectionner un patient</InputLabel>
                    <Select
  labelId="patient-select-label"
  value={selectedPatient}
  onChange={handlePatientChange}
  label="Sélectionner un patient"
>
  {patients.map((patient) => (
    <MenuItem key={patient.id} value={patient.id}>
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#b71c1c" }}> 
            {getInitials(patient.firstName, patient.lastName)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={patient.lastName}
          secondary={patient.firstName}
        />
      </ListItem>
    </MenuItem>
  ))}
</Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    minWidth: { xs: "800px", sm: "100%" }, // Largeur minimale pour le scroll
                  }}
                >
                  <Calendar
                    localizer={localizer}
                    events={calendarEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{
                      height: 510,
                      width: "100%",
                      maxWidth: "1000px",
                      marginBottom: "10px",
                    }}
                    views={["month", "week", "day"]}
                    defaultView="week"
                    selectable
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default MonCalendrierInfirmier;
