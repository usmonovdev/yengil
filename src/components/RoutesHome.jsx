import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./register/Register";
import Login from "./login/Login";
import Statistics from "./adv/statistics/Statistics";
import Error from "./errorPage/Error";

const RoutesHome = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/static"} element={<Statistics />} />
        <Route path={"*"} element={<Error />} />
      </Routes>
    </>
  );
};

export default RoutesHome;
