import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

//Left Arrow Start

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (

    <Typography onClick={() => scrollPrev()} className="Right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

//Left Arrow End

//Right Arrow Start
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (

    <Typography onClick={() => scrollNext()} className="Left-arrow">
      <img src={RightArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

//Right Arrow End

/* 2} we receive data bodyPart and SetBodyPart from  SearchExercise component.
 3} we also import bodyPart ui from bodyPart component. */
const HorizontalScrollBar = ({ data, setBodyPart, bodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {/* we pass the bodyPart setBodyPart which can pass through the props to the BodyPart component*/}
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />

        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;