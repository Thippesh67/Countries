import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Grid, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CountriesList = () => {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Brazil",
    "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", "Croatia", "Cuba",
    "Denmark", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
    "Germany", "Ghana", "Greece", "Guatemala", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Latvia", "Lebanon",
    "Lithuania", "Luxembourg", "Madagascar", "Malaysia", "Maldives", "Mali", "Malta", "Mexico", "Moldova", "Monaco",
    "Mongolia", "Morocco", "Myanmar", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Nigeria", "North Korea",
    "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Saudi Arabia", "Senegal", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea",
    "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  return (
    <Container maxWidth="md" sx={{ py: 5, textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}
      >
        🌍 List of Countries
      </Typography>

      {/* Search Input */}
      <TextField
        variant="outlined"
        placeholder="Search countries..."
        fullWidth
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: "gray", mr: 1 }} />,
        }}
        sx={{ mb: 4 }}
      />

      {/* Country List Grid */}
      <Grid container spacing={2}>
        {filteredCountries.map((country, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                fontWeight: "bold",
                bgcolor: "lightblue",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { bgcolor: "skyblue", transform: "scale(1.05)" },
              }}
            >
              {country}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CountriesList;
