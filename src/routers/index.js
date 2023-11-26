import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard";
import MainLayout from "../components/layout/main-layout";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Index;
