import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


//here we make function for leftarrow and right arrow. 
const LeftArrow = () => {
  // we use the object destructuring that we pass the visibilitycontext as initial value..for visible the card after clicking the arrow.
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  // we use the object destructuring that we pass the visibilitycontext as initial value..for visible the card after clicking the arrow.
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  //take the props from searchingExercise component...
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {/*  we iterate the all exercise with the help of data  */}
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {/* if bodyParts available then the bodyPart component show otherwise ExerciseCard component show.. this condition for reusability of code in similarExercise component  */}
        {/* pass the props to the bodyPart Component */}
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;