import React from "react";
import { Box, Button, Grid, Paper } from "@mui/material";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Typography from "@mui/material/Typography";

// Définir les styles pour le PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "magenta",
    fontWeight: "bold",
  },
  text: {
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  rightAlign: {
    textAlign: "right",
  },
  signature: {
    textAlign: "right",
    marginTop: 50,
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
  },
});

// Composant pour générer le PDF
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Ordonnance Médicale</Text>

      <View style={styles.section}>
        <Text style={styles.boldText}>Nom et prénom du médecin : Dr Jone</Text>
        <Text>Spécialité : Généraliste</Text>
        <Text>Adresse du cabinet : Sananry</Text>
        <Text>Téléphone : 0690 000 000</Text>
        <Text>Numéro PPS : 09/0</Text>
      </View>

      <View style={[styles.section, styles.rightAlign]}>
        <Text>Date : 09/07</Text>
        <Text>Nom et prénom du patient : Dr Jone</Text>
        <Text>Date de naissance : 09/07/2000</Text>
        <Text>Adresse du patient : Rue st andre</Text>
        <Text>Numéro de sécurité sociale : 0086546436780</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>Affection de longue durée (ADL)</Text>
        <Text>Titre : Dépression</Text>
        <Text>Protocole de soins établi le 09/07/2024</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>Médicament(s) prescrit(s)</Text>
        <Text>Phenelzine - Posologie - 1 fois par jour.</Text>
        <Text>Durée de traitement - 1 jour.</Text>
        <Text>Tranylcypromine - Posologie - 1 fois par jour.</Text>
        <Text>Durée de traitement - 1 jour.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>
          Examens d’analyse médicale prescrits
        </Text>
        <Text>- Hémogramme (NFS)</Text>
        <Text>- Hémogramme (NFS, plaquettes)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>Soins et prise en charge</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>Observations et conseils</Text>
      </View>

      <View style={styles.signature}>
        <Text>Signature du médecin : Dr. Jone</Text>
        <Text>0975322</Text>
      </View>
    </Page>
  </Document>
);

// Composant principal
const Prescription = () => {
  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" color="magenta" gutterBottom>
          Ordonnance Médicale
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              <strong>Nom et prénom du médecin :</strong> Dr Jone
              <br />
              <strong>Spécialité :</strong> Généraliste
              <br />
              <strong>Adresse du cabinet :</strong> Sananry
              <br />
              <strong>Téléphone :</strong> 0690 000 000
              <br />
              <strong>Numéro PPS :</strong> 09/0
              <br />
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography variant="body1" gutterBottom>
              <strong>Date :</strong> 09/07
              <br />
              <strong>Nom et prénom du patient :</strong> Dr Jone
              <br />
              <strong>Date de naissance :</strong> 09/07/2000
              <br />
              <strong>Adresse du patient :</strong> Rue st andre
              <br />
              <strong>Numéro de sécurité sociale :</strong> 0086546436780
              <br />
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>
          Affection de longue durée (ADL)
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Titre :</strong> Dépression
          <br />
          Protocole de soins établi le 09/07/2024
        </Typography>

        <Typography variant="h6" gutterBottom>
          Médicament(s) prescrit(s)
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phenelzine - Posologie - 1 fois par jour. Durée de traitement - 1
          jour.
          <br />
          Tranylcypromine - Posologie - 1 fois par jour. Durée de traitement - 1
          jour.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Examens d’analyse médicale prescrits
        </Typography>
        <Typography variant="body1" gutterBottom>
          - Hémogramme (NFS)
          <br />- Hémogramme (NFS, plaquettes)
        </Typography>

        <Typography variant="h6" gutterBottom>
          Soins et prise en charge
        </Typography>

        <Typography variant="h6" gutterBottom>
          Observations et conseils
        </Typography>

        <Box mt={5} textAlign="right">
          <Typography variant="body1" gutterBottom>
            Signature du médecin : Dr. Jone
            <br />
            0975322
          </Typography>
        </Box>

        <Box mt={3} textAlign="center">
          <PDFDownloadLink
            document={<MyDocument />}
            fileName="ordonnance_medicale.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                "Création du PDF..."
              ) : (
                <Button
                  style={{
                    backgroundColor: "#FF3399",
                    "&:hover": {
                      backgroundColor: "#ff1744",
                    },
                  }}
                  variant="contained"
                  color="primary"
                >
                  Télécharger l'ordonnance
                </Button>
              )
            }
          </PDFDownloadLink>
        </Box>
      </Paper>
    </Box>
  );
};

export default Prescription;
