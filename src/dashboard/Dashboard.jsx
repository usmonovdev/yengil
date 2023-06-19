import React from "react";
import Nav from "./dashboardNav/Nav";
import Home from "./home/Home";
import Students from "./students/Students";
import Groups from "./groups/Groups";
import Teachers from "./teachers/Teachers";
import Money from "./money/Money";
import Settings from "./settings/Settings";
import { Route, Routes } from "react-router-dom";
import Error from "../components/errorPage/Error";
import { Box } from "@mui/material";
import GroupOpen from "./groups/open/GroupOpen";

const Dashboard = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row" }}
    > 
      <Nav />
      <Routes>
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/students" element={<Students />} />
        <Route path="/dashboard/groups" element={<Groups />} />
        <Route path="/dashboard/groups/:id" element={<GroupOpen />} />
        <Route path="/dashboard/teachers" element={<Teachers />} />
        <Route path="/dashboard/money" element={<Money />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </Box>

  )
  }

export default Dashboard;
