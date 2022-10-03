import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./routes/MovieDetail";
import MovieApp from "./components/MovieApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieApp />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>
);
