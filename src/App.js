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
  let [quarter, setQuarter] = useState(1);
  let [down, setDown] = useState(1);

  const changeScore = (team, points) =>
    team === "Home"
      ? setScore({ ...scores, home: scores.home + points })
      : setScore({ ...scores, away: scores.away + points });

  const changeQuarter = () => {
    if(quarter === 4){
      quarter = 0
    }
    setQuarter(quarter + 1);
  };
//? Is it better to pass the hook down as props or pass the change handler?
//Probably makes more sense to have the changehanlder because you need to pass something in the state function

const changeDown = () => {
  if(down === 4){
    down = 0
  }
  setDown(down + 1);
};
  return (
    <div className="container">
      <Scoreboard scores={scores} quarter={quarter} down={down}/>
      <Buttons changeScore={changeScore} changeQuarter={changeQuarter} changeDown={changeDown}/>
    </div>
  );
}

export default App;
