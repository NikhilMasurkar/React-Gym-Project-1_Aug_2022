import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: "122px", xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: "none" }} px="20px">
      <Link className="logo" to="/" >
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}

        />
        
        <h4 className="logoName">NikFitness</h4>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px " alignItems="flex-end" ml="153px">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
