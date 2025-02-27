import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, TextField, Button, Typography, Box } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === email)) {
      alert("Email already registered. Please login.");
      navigate("/login");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful! You can now log in.");
    navigate("/login");
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ padding: 4, textAlign: "center", mt: 15, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          📝 Register
        </Typography>
        <Box component="form" onSubmit={handleRegister} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
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
            Register
          </Button>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/login")}>
            Login
          </span>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
