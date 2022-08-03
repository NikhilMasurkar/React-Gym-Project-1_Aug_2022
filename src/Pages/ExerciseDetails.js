import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData';
import Details from '../Components/Details';
import ExerciseVideo from '../Components/ExerciseVideo';
import SimilarExercises from '../Components/SimilarExercises';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideo, setExerciseVideo] = useState('')
  const [similarExercises, setSimilarExercises] = useState('')

  const {id} =useParams();

  useEffect(()=>{
    const fetchExercisesData = async()=>{
          const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
          const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
          const ExerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`,exerciseOptions)
          setExerciseDetail (ExerciseDetailData);
    }
    fetchExercisesData()
  },[id])
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails