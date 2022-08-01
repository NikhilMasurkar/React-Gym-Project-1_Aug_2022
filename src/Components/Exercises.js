import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

// and exercisesOption fetchData are import from the fetchdata component for get the exercises
// we access the exercises setExercises and bodyPart from the home component

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = ( e, value) => {
    //paginate function get the parameter (event,value) from the function of material ui pass in paginate
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exerciseData)
    }
    fetchExerciseData()
  }, )


  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      {/* Pagination Start */}
      <Stack
        sx={{
          mt: { lg: "114px", xs: "70px" },
          mb: { lg: "114px", xs: "70px" },
        }}
        alignItems="center"
      >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            //   onChange paginate function pass the (e and value) with the help of material ui  ex: - onChange {(e)=>paginate(e,value)}.
            size="large"
          />
        )}
      </Stack>
      {/* Pagination End  */}

      {/* Exercise Card Start */}
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      {/* Exercise Card Start */}

      {/* Pagination Start  */}
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            //   onChange paginate function pass the (e and value) with the help of material ui  ex: - onChange {(e)=>paginate(e,value)}.
            size="large"
          />
        )}
      </Stack>
      {/* Pagination End */}
    </Box>
  );
};

export default Exercises;
