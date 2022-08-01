import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exercise/:id" element={<ExerciseDetails />} />
        {/*id is  a dynamic render in exercise component which is change 1 2 3 4 etc*/}
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
