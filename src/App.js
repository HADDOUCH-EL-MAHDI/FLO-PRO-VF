import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import './App.css';
import LandingPage from "./pages/LandingPage";
import NextSignUp from "./pages/NextSignUp";
import TrancheAge from "./Consultations/Pages/TrancheAge";
import FormPatient from "./Consultations/Pages/FormPatient";
import Prediagnostique from "./Consultations/Pages/Prediagnostique";
import Questionnaire1 from "./Consultations/Pages/Questionnaire1";
import Questionnaire2 from "./Consultations/Pages/Questionnaire2";
import QuestionSupplementaire from "./Consultations/Pages/QuestionSupplementaire";
import Conseils from "./Consultations/Pages/Conseils";
import ConseilsAlimentaire from "./Consultations/Pages/ConseilsAlimentaire";
import DiagMedicament from "./Consultations/Pages/DiagMedicament";
import OrdonnanceMedicale from "./Consultations/Pages/OrdonnanceMedicale";
import Bilan from "./Consultations/Pages/Bilan";
import PharmacieLocateur from "./Consultations/Pages/PharmacieLocateur";
import Laboratoirlocator from "./Consultations/Pages/Laboratoirlocator";
import Prescription from "./Consultations/Pages/Prescription";
import Calendrier from "./Rendez-vous/Pages/Calendrier";
import MesPatients from "./mesPatients/pages/MesPatients";
import Home_Infirmier from "./Infirmier/Pages/Home_Infirmier";
import Notifications from "./Infirmier/Pages/Notifications"
import MonCalendrierInfirmier from "./Infirmier/Pages/MonCalendrierInfirmier";
import { ColorModeProvider } from './context/ColorModeContext'; // Importer le contexte

function App() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="landingpage" element={<LandingPage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp/>} />  
          <Route path="/nextsignup" element={<NextSignUp/>} />
          <Route path="/trancheage" element={<TrancheAge/>} /> 
          <Route path="/formpatient" element={<FormPatient/>} />
          <Route path="/prediagnostique" element={<Prediagnostique/>} /> 
          <Route path="/questionnaire1" element={<Questionnaire1/>} />     
          <Route path="/questionnaire2" element={<Questionnaire2/>} /> 
          <Route path="/questionsupplementaire" element={<QuestionSupplementaire/>} />
          <Route path="/conseils" element={<Conseils/>} /> 
          <Route path="/conseilsalimentaire" element={<ConseilsAlimentaire/>} />  
          <Route path="/diagmedicament" element={<DiagMedicament/>} /> 
          <Route path="/ordonnancemedicale" element={<OrdonnanceMedicale/>} />
          <Route path="/bilan" element={<Bilan/>} /> 
          <Route path="/pharmacielocateur" element={<PharmacieLocateur/>} /> 
          <Route path="/laboratoirlocator" element={<Laboratoirlocator/>} />   
          <Route path="/prescription" element={<Prescription/>} />  
          <Route path="/calendrier" element={<Calendrier/>} />
          <Route path="/mespatients" element={<MesPatients/>} /> 
          <Route path="/homeinfirmier" element={<Home_Infirmier/>} /> 
          <Route path="/notifications" element={<Notifications/>} /> 
          <Route path="/moncalendrierinfirmier" element={<MonCalendrierInfirmier/>} /> 
        </Routes>
      </BrowserRouter>
      </ColorModeProvider>
  );
}

export default App;
