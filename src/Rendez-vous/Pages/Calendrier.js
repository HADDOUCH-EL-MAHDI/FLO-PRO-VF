import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import AppAppBar from "../../components/AppAppBar";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { fr } from "date-fns/locale";
import bgimage from "../../bgimage.jpg";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage_right_mode from "../../bgimage-right-mode.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

function Calendrier() {
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
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    socialSecurityNumber: "",
    lastName: "",
    firstName: "",
    birthDate: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
  });
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];

    const eventsWithCorrectDates = storedEvents.map((event) => {
      return {
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      };
    });

    setCalendarEvents(eventsWithCorrectDates);
  }, []);

  const handleSelectSlot = (slotInfo) => {
    setSelectedEvent(slotInfo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({
      socialSecurityNumber: "",
      lastName: "",
      firstName: "",
      birthDate: "",
      address: "",
      postalCode: "",
      city: "",
      phone: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const eventPropGetter = (event) => {
    let newStyle = {
      backgroundColor: "#FF3399",
      color: "white",
      borderRadius: "5px",
      border: "none",
    };

    return {
      style: newStyle,
    };
  };

  const handleSave = () => {
    const newEvent = {
      title: "Planifié",
      start: selectedEvent.start,
      end: selectedEvent.end,
      allDay: false,
      formData,
    };

    const updatedEvents = [...calendarEvents, newEvent];
    setCalendarEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setOpen(false);
  };

  const handleSelectEvent = (event) => {
    setEventDetails(event.formData);
    setDetailsOpen(true);
    setIsEditing(false); // Start in non-editing mode
  };

  const handleSaveEdit = () => {
    // Update the event details with the new form data
    const updatedEvents = calendarEvents.map((event) =>
      event.formData.socialSecurityNumber === eventDetails.socialSecurityNumber
        ? { ...event, formData: eventDetails }
        : event
    );

    setCalendarEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setDetailsOpen(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDetailsInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleSearch = () => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];

    // Trouver un événement qui correspond au numéro de sécurité sociale saisi
    const matchedEvent = storedEvents.find(
      (event) =>
        event.formData.socialSecurityNumber === formData.socialSecurityNumber
    );

    if (matchedEvent) {
      // Si un événement est trouvé, remplissez le formulaire avec les informations correspondantes
      setFormData({
        socialSecurityNumber: matchedEvent.formData.socialSecurityNumber,
        lastName: matchedEvent.formData.lastName,
        firstName: matchedEvent.formData.firstName,
        birthDate: matchedEvent.formData.birthDate,
        address: matchedEvent.formData.address,
        postalCode: matchedEvent.formData.postalCode,
        city: matchedEvent.formData.city,
        phone: matchedEvent.formData.phone,
      });
    } else {
      // Si aucun événement ne correspond, réinitialisez les autres champs
      setFormData({
        ...formData,
        lastName: "",
        firstName: "",
        birthDate: "",
        address: "",
        postalCode: "",
        city: "",
        phone: "",
      });
    }
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
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: { xs: "100px", sm: "80px", md: "110px" },
                marginLeft: { xs: "10px", sm: "20px" },
                marginRight: { xs: "10px", sm: "20px" },
                marginBottom: "16px",
                borderRadius: "16px",
                // backgroundColor: "rgba(33, 150, 243, 0.8)",
                backgroundColor:
                  mode === "light"
                    ? "rgba(33, 150, 243, 1)"
                    : "rgba(0, 0, 0, 0.5)",
                color: "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.8)",
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
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
                eventPropGetter={eventPropGetter} // Ajout de la fonction de personnalisation
                messages={{
                  today: "aujourd'hui",
                  previous: "précédent",
                  next: "suivant",
                  month: "mois",
                  week: "semaine",
                  day: "jour",
                }}
                sx={{
                  marginRight: { xs: "30px", sm: "10px" },
                }}
              />
            </Grid>
          </Grid>

          <Dialog
            open={open}
            onClose={handleClose}
            style={{ borderRadius: "16px" }}
          >
            <DialogTitle
              sx={{
                backgroundColor: "#607d8b",
                color: "white",
                textAlign: "center",
              }}
            >
              Prendre Rendez-vous
            </DialogTitle>
            <DialogContent>
              <TextField
                margin="dense"
                label="Numéro Sécurité Sociale"
                fullWidth
                variant="outlined"
                name="socialSecurityNumber"
                value={formData.socialSecurityNumber}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Nom"
                fullWidth
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Prénom"
                fullWidth
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Date de Naissance"
                type="date"
                fullWidth
                variant="outlined"
                name="birthDate"
                InputLabelProps={{ shrink: true }}
                value={formData.birthDate}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Adresse"
                fullWidth
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Code Postal"
                fullWidth
                variant="outlined"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Ville"
                fullWidth
                variant="outlined"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Téléphone"
                fullWidth
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </DialogContent>
            <DialogActions>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#4caf50",
                      "&:hover": {
                        backgroundColor: "#43a047",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    style={{ borderRadius: "16px" }}
                    onClick={handleSave}
                  >
                    Sauvegarder
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    type="button"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#FF3399",
                      "&:hover": {
                        backgroundColor: "#ff1744",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    style={{ borderRadius: "16px" }}
                    onClick={handleSearch} // Appel à la fonction handleSearch lors du clic
                  >
                    Rechercher
                  </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    type="button"
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#607d8b",
                      "&:hover": {
                        backgroundColor: "#455a64",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    style={{ borderRadius: "16px" }}
                    onClick={handleClose}
                  >
                    Annuler
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>

          <Dialog
            open={detailsOpen}
            onClose={() => setDetailsOpen(false)}
            PaperProps={{
              style: {
                borderRadius: "16px",
                width: "600px",
              },
            }}
          >
            <DialogTitle
              sx={{
                backgroundColor: "#607d8b",
                color: "white",
                textAlign: "center",
              }}
            >
              Détails du Rendez-vous
            </DialogTitle>
            <DialogContent sx={{ marginTop: "20px" }}>
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#76ff03" }}>
                      Numéro Sécurité Sociale :
                    </strong>
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {!isEditing ? (
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                      {eventDetails.socialSecurityNumber}
                    </Typography>
                  ) : (
                    <TextField
                      margin="dense"
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="socialSecurityNumber"
                      value={eventDetails.socialSecurityNumber}
                      onChange={handleDetailsInputChange}
                    />
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#76ff03" }}>Nom :</strong>
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {!isEditing ? (
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                      {eventDetails.lastName}
                    </Typography>
                  ) : (
                    <TextField
                      margin="dense"
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="lastName"
                      value={eventDetails.lastName}
                      onChange={handleDetailsInputChange}
                    />
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#76ff03" }}>Prénom :</strong>
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {!isEditing ? (
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                      {eventDetails.firstName}
                    </Typography>
                  ) : (
                    <TextField
                      margin="dense"
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="firstName"
                      value={eventDetails.firstName}
                      onChange={handleDetailsInputChange}
                    />
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#76ff03" }}>
                      Date de Naissance :
                    </strong>
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {!isEditing ? (
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                      {eventDetails.birthDate}
                    </Typography>
                  ) : (
                    <TextField
                      margin="dense"
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="birthDate"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      value={eventDetails.birthDate}
                      onChange={handleDetailsInputChange}
                    />
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#76ff03" }}>Adresse :</strong>
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {!isEditing ? (
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                      {eventDetails.address}
                    </Typography>
                  ) : (
                    <TextField
                      margin="dense"
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="address"
                      value={eventDetails.address}
                      onChange={handleDetailsInputChange}
                    />
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#76ff03" }}>Code Postal :</strong>
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {!isEditing ? (
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                      {eventDetails.postalCode}
                    </Typography>
                  ) : (
                    <TextField
                      margin="dense"
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="postalCode"
                      value={eventDetails.postalCode}
                      onChange={handleDetailsInputChange}
                    />
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#76ff03" }}>Ville :</strong>
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {!isEditing ? (
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                      {eventDetails.city}
                    </Typography>
                  ) : (
                    <TextField
                      margin="dense"
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="city"
                      value={eventDetails.city}
                      onChange={handleDetailsInputChange}
                    />
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#76ff03" }}>Téléphone :</strong>
                  </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                  {!isEditing ? (
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                      {eventDetails.phone}
                    </Typography>
                  ) : (
                    <TextField
                      margin="dense"
                      fullWidth
                      variant="outlined"
                      name="phone"
                      size="small"
                      value={eventDetails.phone}
                      onChange={handleDetailsInputChange}
                    />
                  )}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              {!isEditing ? (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF3399",
                    "&:hover": {
                      backgroundColor: "#ff1744",
                    },
                  }}
                  style={{ borderRadius: "16px" }}
                  onClick={handleEdit}
                >
                  Modifier
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF3399",
                    "&:hover": {
                      backgroundColor: "#ff1744",
                    },
                  }}
                  style={{ borderRadius: "16px" }}
                  onClick={handleSaveEdit}
                >
                  Enregistrer
                </Button>
              )}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#607d8b",
                  "&:hover": {
                    backgroundColor: "#455a64",
                  },
                }}
                style={{ borderRadius: "16px" }}
                onClick={() => setDetailsOpen(false)}
              >
                Fermer
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Calendrier;
