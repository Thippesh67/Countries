import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, TextField, Button, Typography, Box } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find((user) => user.email === email && user.password === password);

    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      alert("Login Successful!");
      navigate("/countriesList"); // Redirect to Countries List
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ padding: 4, textAlign: "center", mt: 15, borderRadius: 3, }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          🔐 Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/register")}>Sign Up</span>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
