import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import TeamContent from "../TeamContent/TeamContent";
import SearchPage from "../SearchPage/SearchPage";
import AboutPage from "../About/About";
import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/" element={<TeamContent />} />
          <Route path="/info" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
