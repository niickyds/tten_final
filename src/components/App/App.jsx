import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import TeamContent from "../TeamContent/TeamContent";
import InfoPage from "../InfoPage/InfoPage";
import AboutPage from "../About/About";
import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/" element={<TeamContent />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
