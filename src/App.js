import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Layout from "./layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import UserList from "./Components/UserList/UserList";
import Eventlist from "./Components/EventList/Eventlist";
import ProtectedRoute from "./Utils/Protectedroute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-list"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/event-list"
            element={
              <ProtectedRoute>
                <Eventlist />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
