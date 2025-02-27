import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { useParams } from "react-router-dom";

const countryData = {
  India: {
    history: "India is one of the world's oldest civilizations, with a rich heritage and history dating back thousands of years...",
    mapUrl: "https://cdn.upsccolorfullnotes.com/q:i/r:0/wp:1/w:1250/u:https://upsccolorfullnotes.com/wp-content/uploads/2023/06/neighbouring-countries-of-india-on-map-3.jpg",
  },
  USA: {
    history: "The United States was founded in 1776 and has grown to be one of the world's largest economies...",
    mapUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/USA_Map.svg",
  },
  // Add more country details as needed...
};

const CountryDetails = () => {
  const { country } = useParams();
  const details = countryData[country] || {
    history: "Details not available",
    mapUrl: "",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #2c3e50, #4ca1af)", // Gradient Background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          padding: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="#2c3e50" gutterBottom>
          {country}
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            textAlign: "left",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            marginBottom: 3,
          }}
        >
          <Typography variant="body1" fontSize="1.2rem" lineHeight="1.6">
            {details.history}
          </Typography>
        </Paper>

        {details.mapUrl && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={details.mapUrl}
              alt={`${country} map`}
              width="100%"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CountryDetails;