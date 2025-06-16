import React, { useContext } from "react";
import {
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ChatDashboard from "./pages/ChatDashboard";
import UserProfilePage from "./pages/UserProfilePage";

import { AuthContext } from "./context/AuthContext"; 

const App = () => {
  const { isAuthUser } = useContext(AuthContext);
  console.log(isAuthUser);

  const router = createHashRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: isAuthUser ? <HomePage /> : <Navigate to="login" />,
        },
        {
          path: "login",
          element: !isAuthUser ? <AuthPage /> : <Navigate to="/" />,
        },
        {
          path: "register",
          element: !isAuthUser ? <AuthPage /> : <Navigate to="/" />,
        }, 
        {
          path: "/chats",
          element: isAuthUser ? <ChatDashboard /> : <Navigate to="/login" />,
        },
        {
          path: "/profile",
          element: isAuthUser ? <UserProfilePage /> : <Navigate to="/login" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
