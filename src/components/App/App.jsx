import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import TeamContent from "../TeamContent/TeamContent";
import InfoPage from "../InfoPage/InfoPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <TeamContent />
        <Routes>
          <Route path="/" element={<TeamContent />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
