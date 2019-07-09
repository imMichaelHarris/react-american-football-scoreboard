//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Scoreboard from "./Scoreboard";
import Buttons from "./Buttons";

function App() {
  const [scores, setScore] = useState({
    home: 0,
    away: 0
  });
  const [quarter, setQuarter] = useState([1, 2, 3, 4]);

  const changeScore = (team, points) =>
    team === "Home"
      ? setScore({ ...scores, home: scores.home + points })
      : setScore({ ...scores, away: scores.away + points });

  const changeQuarter = () => setQuarter(quarter + 1);
  return (
    <div className="container">
      <Scoreboard scores={scores} quarter={quarter} />
      <Buttons changeScore={changeScore} changeQuarter={changeQuarter} />
    </div>
  );
}

export default App;
