import React from "react";
import BottomRow from "./BottomRow";

const Scoreboard = (props) => {
    console.log(props)
  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{props.scores.home}</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{props.scores.away}</div>
        </div>
      </div>
      <BottomRow quarter={props.quarter}/>
    </section>
  );
};

export default Scoreboard;
