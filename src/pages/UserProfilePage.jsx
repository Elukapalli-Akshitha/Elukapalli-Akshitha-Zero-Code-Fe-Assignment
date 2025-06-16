import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const UserProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>User Profile</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar sx={{ width: 64, height: 64 }}>{user?.fullname?.[0]}</Avatar>
        <Box>
          <Typography variant="h6">{user?.fullname}</Typography>
          <Typography variant="body1">{user?.email}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfilePage;
