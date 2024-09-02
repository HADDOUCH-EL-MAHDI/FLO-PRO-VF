import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import AppAppBar from "../components/AppAppBar";
import {
  Box,
  Container,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import BtnConsulter from "../components/BtnConsulter";
import cardsData from "../cardsData.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import bgimage from "../bgimage.jpg";
import bgimage_right_mode from "../bgimage-right-mode.png";
import { useColorMode } from '../context/ColorModeContext'
const CARDS_PER_PAGE = 3;

function Home() {
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

  const [currentPage, setCurrentPage] = useState(0);
  const [chatOpen, setChatOpen] = useState(true);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordingInterval, setRecordingInterval] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const messagesEndRef = useRef(null); // Référence pour le scroll

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(cardsData.length / CARDS_PER_PAGE) - 1)
    );
  };

  const currentCards = cardsData.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  const handleChatClose = () => {
    setChatOpen(false);
  };

  const handleChatMinimize = () => {
    setChatMinimized(!chatMinimized);
  };

  const handleChatMessageSend = () => {
    if (capturedImage) {
      // Si une image est capturée, l'ajouter aux messages
      setChatMessages([
        ...chatMessages,
        { type: "sent", content: capturedImage, mediaType: "image" },
      ]);
      setCapturedImage(null); // Réinitialiser l'image capturée après l'envoi
      setIsCameraOpen(false); // Fermer la caméra après l'envoi de l'image
    }

    if (message.trim()) {
      // Envoyer le message texte si disponible
      setChatMessages([...chatMessages, { type: "sent", content: message }]);
      setMessage(""); // Réinitialiser le champ de saisie après l'envoi
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setChatMessages([...chatMessages, { type: "sent", content: file.name }]);
    }
  };

  const handleAudioRecord = () => {
    if (isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      clearInterval(recordingInterval);
    } else {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (e) => {
          const audioURL = URL.createObjectURL(e.data);
          setChatMessages([
            ...chatMessages,
            { type: "sent", content: audioURL, mediaType: "audio" },
          ]);
        };

        recorder.start();
        setIsRecording(true);
        setRecordingTime(0);

        const interval = setInterval(() => {
          setRecordingTime((prevTime) => prevTime + 1);
        }, 1000);

        setRecordingInterval(interval);
      });
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = document.getElementById("camera-video");
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => console.error("Error accessing camera: ", err));
  };

  const handleCaptureImage = () => {
    const video = document.getElementById("camera-video");
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    setCapturedImage(canvas.toDataURL("image/png"));
  };

  // Scroll automatique vers le bas
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: "0px",
          backgroundImage: `url(${
            mode === "light" ? bgimage : bgimage_right_mode
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Container maxWidth="lg" style={{ marginTop: "0px" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "#FF3399" : "#000000",
              }}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              <ArrowBackIosIcon style={{ fontSize: 40 }} />
            </IconButton>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              {currentCards.map((card, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={index}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderRadius: "16px",
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: 100,
                        width: "20%",
                        display: "block",
                        margin: "auto",
                        objectFit: "contain",
                      }}
                      src={card.image}
                      alt="problème de chemain"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                      >
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                      <BtnConsulter size="small" href={card.buttonLink}>
                        {card.buttonText}
                      </BtnConsulter>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <IconButton
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "#FF3399" : "#000000",
              }}
              onClick={handleNextPage}
              disabled={(currentPage + 1) * CARDS_PER_PAGE >= cardsData.length}
            >
              <ArrowForwardIosIcon style={{ fontSize: 40 }} />
            </IconButton>
          </Box>

          <Dialog
            open={chatOpen}
            onClose={handleChatClose}
            fullScreen={chatMinimized}
            sx={{
              "& .MuiDialog-paper": {
                width: chatMinimized ? "auto" : "400px",
                position: "fixed",
                bottom: 0, // Stick to the bottom when minimized
                right: 0,
                margin: 0,
                borderRadius: chatMinimized ? "0px 0px 10px 10px" : "10px",
                boxShadow: 16,
                ...(chatMinimized && {
                  height: "50px", // Hauteur lorsque minimisé
                  minHeight: "50px",
                  padding: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%", // Full width when minimized
                }),
              },
            }}
          >
            <DialogTitle
              sx={{
                backgroundColor: "#607d8b",
                color: "white",
                ...(chatMinimized && {
                  padding: "5px", // Réduire les marges
                }),
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Chatbot</Typography>
                <Box>
                  <IconButton
                    sx={{ color: "white" }}
                    onClick={handleChatMinimize}
                  >
                    {chatMinimized ? <OpenInFullIcon /> : <MinimizeIcon />}
                  </IconButton>
                  <IconButton sx={{ color: "red" }} onClick={handleChatClose}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
            </DialogTitle>
            {!chatMinimized && (
              <>
                <DialogContent dividers>
                  <Box sx={{ maxHeight: "300px", overflowY: "auto" }}>
                    {chatMessages.map((msg, index) => (
                      <Box
                        key={index}
                        sx={{
                          margin: "10px 10px",
                          marginLeft: msg.type === "sent" ? "40%" : "0px",
                          padding: "8px",
                          borderRadius: "16px",
                          backgroundColor:
                            msg.type === "sent" ? "#007bff" : "#f1f0f0",
                          color: msg.type === "sent" ? "white" : "black",
                          maxWidth: "60%",
                          alignSelf:
                            msg.type === "sent" ? "flex-end" : "flex-start",
                          display: "flex",
                        }}
                      >
                        {msg.mediaType === "image" ? (
                          <img
                            src={msg.content}
                            alt="Sent"
                            style={{ width: "100%" }}
                          />
                        ) : msg.mediaType === "audio" ? (
                          <audio controls src={msg.content}></audio>
                        ) : (
                          <Typography variant="body1">{msg.content}</Typography>
                        )}
                      </Box>
                    ))}
                    <div ref={messagesEndRef} />
                  </Box>
                </DialogContent>
                {isCameraOpen && (
                  <Box>
                    <video id="camera-video" style={{ width: "100%" }} />
                  </Box>
                )}
                <DialogActions>
                  {!isCameraOpen ? (
                    <>
                      <TextField
                        fullWidth
                        size="small"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Écrire un message..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleChatMessageSend();
                          }
                        }}
                      />
                      <IconButton onClick={handleOpenCamera}>
                        <CameraAltIcon />
                      </IconButton>
                      <IconButton component="label">
                        <AttachFileIcon />
                        <input type="file" hidden onChange={handleFileUpload} />
                      </IconButton>
                      <IconButton onClick={handleAudioRecord}>
                        {isRecording ? (
                          <>
                            <StopIcon />
                            <Typography variant="caption">
                              {formatTime(recordingTime)}
                            </Typography>
                          </>
                        ) : (
                          <MicIcon />
                        )}
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <Button
                        sx={{
                          pl: 2,
                          pr: 2,
                          backgroundColor: "#FF3399",
                          "&:hover": {
                            backgroundColor: "#ff1744",
                          },
                          display: "flex",
                          alignItems: "center",
                        }}
                        variant="contained"
                        color="primary"
                        onClick={handleCaptureImage}
                        style={{ borderRadius: "10px", fontSize: "10px" }}
                      >
                        Capture
                      </Button>
                    </>
                  )}
                  {capturedImage && (
                    <Box sx={{ mt: 2 }}>
                      <img
                        src={capturedImage}
                        alt="Captured"
                        style={{ width: "100%" }}
                      />
                    </Box>
                  )}
                  <Button
                    type="submit"
                    sx={{
                      pl: 2,
                      pr: 2,
                      backgroundColor: "#FF3399",
                      "&:hover": {
                        backgroundColor: "#ff1744",
                      },
                      display: "flex",
                      alignItems: "center",
                    }}
                    style={{ borderRadius: "10px", fontSize: "10px" }}
                    onClick={handleChatMessageSend}
                    variant="contained"
                    color="primary"
                  >
                    Envoyer
                  </Button>
                </DialogActions>
              </>
            )}
          </Dialog>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
