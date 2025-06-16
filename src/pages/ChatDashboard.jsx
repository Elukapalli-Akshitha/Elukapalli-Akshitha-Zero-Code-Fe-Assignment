import React from "react";
import { Box, Typography } from "@mui/material";

import ChatBox from "../components/ChatBox";

const ChatDashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Conversations
      </Typography>
      <ChatBox />
    </Box>
  );
};

export default ChatDashboard;
