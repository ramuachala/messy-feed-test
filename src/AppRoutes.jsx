import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path="home" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
};

export default AppRoutes;
