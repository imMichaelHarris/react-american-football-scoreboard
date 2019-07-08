import React from "react";

const Buttons = (props) => {
  return (
    <>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => props.changeScore("Home", 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => changeHome(3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => changeAway(7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => changeAway(3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </>
  );
};

export default Buttons;
