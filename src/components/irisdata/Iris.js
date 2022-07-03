import Svg from "./visualization/Scatter/Svg";
import { useState, useEffect } from "react";
const Iris = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const width = isMobile === true ? 960 : 480;
  const height = isMobile === true ? 480 : 240;
  const margin = {
    top: isMobile === true ? 20 : 10,
    bottom: isMobile === true ? 80 : 40,
    left: isMobile === true ? 100 : 50,
    right: isMobile === true ? 200 : 100,
  };
  const xAxisLabelOffset = isMobile === true ? 60 : 30;
  const yAxisLabelOffset = isMobile === true ? 60 : 30;
  return (
    <>
      <Svg
        width={width}
        height={height}
        margin={margin}
        xAxisLabelOffset={xAxisLabelOffset}
        yAxisLabelOffset={yAxisLabelOffset}
      />
    </>
  );
};

export default Iris;
