import React from "react";

import { Route, Routes, Link } from "react-router-dom";

import Login from "./pages/login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
