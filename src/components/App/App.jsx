import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import SearchPage from "../SearchPage/SearchPage";
import AboutPage from "../About/About";
// import Preloader from "../Preloader/Preloader";
import "./App.css";

function App() {
  return (
    <div className="page">
      {/* <Preloader /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
