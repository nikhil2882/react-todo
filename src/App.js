import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

import Progress from "@mui/material/CircularProgress";

import Login from "./pages/login";
import Home from "./pages/home";
import About from "./pages/about";

import Drawer from "./components/drawer";

export default function App() {
  const [isLoggedInCheck, setIsLoggedInCheck] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(function () {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsLoggedInCheck(true);
  }, []);
  // get token from storage
  // if avalable then home else login

  function setAuth() {
    setIsLoggedIn(true);
  }

  let content = "";

  if (isLoggedInCheck) {
    if (isLoggedIn) {
      content = (
        <>
          <Drawer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Drawer>
        </>
      );
    } else {
      content = <Login setAuth={setAuth} />;
    }
  } else {
    content = <Progress />;
  }

  return <>{content}</>;
}
