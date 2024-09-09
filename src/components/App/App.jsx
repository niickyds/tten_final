import { useState } from "react";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <Header />
        <HomePage />
      </div>
    </>
  );
}

export default App;
