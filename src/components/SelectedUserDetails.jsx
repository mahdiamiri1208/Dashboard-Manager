import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { getUserById } from "../services/UserService";
import { useParams } from "react-router-dom";

export default function SelectedUserDetails() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError("");
    setUser(null);

    getUserById(id)
      .then((res) => setUser(res))
      .catch(() => setError("User not found or network error."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 320 }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ width: 320 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!user) return null;

  return (
    <Paper
      sx={{
        p: 3,
        width: { xs: 240, sm: 320 },
        height: { xs: 240, sm: 320 },
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.09)",
      }}
    >
      <Avatar
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        sx={{ mb: 2, width: { xs: 80, sm: 100 }, height: { xs: 80, sm: 100 } }}
      />
      <Typography variant="h6" align="center" sx={{ fontSize: { xs: 12, sm: 14 } }}>
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ fontSize: { xs: 12, sm: 14 } }}>
        Email: {user.email}
      </Typography>
    </Paper>
  );
}
