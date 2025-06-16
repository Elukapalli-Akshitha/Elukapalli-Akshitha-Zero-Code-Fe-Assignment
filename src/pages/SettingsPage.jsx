import React from "react";
import { Box, Typography, FormControlLabel, Switch, Divider } from "@mui/material";

const SettingsPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Settings</Typography>
      <Divider sx={{ my: 2 }} />
      <FormControlLabel control={<Switch />} label="Enable Notifications" />
      <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
    </Box>
  );
};

export default SettingsPage;
