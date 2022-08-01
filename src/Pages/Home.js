import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExercises";
import Exercises from "../Components/Exercises";
const Home = () => {

  //we need bodyPart useStates into the homeComponent because it changes will reflected to 
  // all across the Application not just in the searchExercises it will reflected into the Exercises thyself.

  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      {/* pass the props to  searchExercises and Exercises */}
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  );
};

export default Home;