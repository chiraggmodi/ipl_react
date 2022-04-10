import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import ScoreboardPage from "./Pages/Scoreboard";
import ScoreboardResultPage from "./Pages/ScoreboardResult";


function App() {
  
  return (
    <>
    <div id="preloader">
      <div id="status">
        <img src="images/cricket/loader.gif" id="preloader_image" alt="loader" />
      </div>
    </div>
    <div className="cursor cursor-shadow"></div>
    <div className="cursor cursor-dot"></div>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="scoreboard" element={<ScoreboardPage />}>
          <Route path=":id" element={<ScoreboardResultPage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
