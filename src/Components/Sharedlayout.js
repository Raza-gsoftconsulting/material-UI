import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";

const Sharedlayout = () => {
  return (
    <Grid>
      <Navbar />
      <Outlet />
    </Grid>
  );
};

export default Sharedlayout;
