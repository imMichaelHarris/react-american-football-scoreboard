//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Scoreboard from "./Scoreboard";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const { score, setScore } = useState({
    home: 0,
    away: 0
  });
  const [quarter, setQuarter] = useState([1, 2, 3, 4]);

  // const changeHome = points => setHomeScore(homeScore + points);
  // const changeAway = points => setAwayScore(awayScore + points);

  const changeScore = (team, points) =>
    team === "Home"
      ? setHomeScore(homeScore + points)
      : setAwayScore(awayScore + points);

  const changeQuarter = () => setQuarter(quarter + 1);
  return (
    <div className="container">
      <Scoreboard
        homeScore={homeScore}
        awayScore={awayScore}
        quarter={quarter}
      />
      <Buttons changeScore={changeScore} changeQuarter={changeQuarter} />
    </div>
  );
}

export default App;
