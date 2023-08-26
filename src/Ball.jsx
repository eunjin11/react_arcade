import React, { memo } from "react";

const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "rgb(207, 61, 61)";
  } else if (number <= 20) {
    background = "rgb(255, 170, 67)";
  } else if (number <= 30) {
    background = "rgb(255, 230, 80)";
  } else if (number <= 40) {
    background = "rgb(90, 100, 255)";
  } else {
    background = "rgb(120, 245, 100)";
  }

  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
});

export default Ball;
