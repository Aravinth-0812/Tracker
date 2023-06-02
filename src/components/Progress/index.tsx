import { useState, useEffect } from "react";
function Progress({ startStopTime }: { startStopTime: any }) {
  let timeInterval: any;
  const [progressTime, setProgressTime] = useState(startStopTime?.mins);
  useEffect(() => {
    if (startStopTime?.mins > 30 && startStopTime?.mins === 0) {
      setProgressTime(0);
    } else if (startStopTime?.mins < 30 && startStopTime?.mins > 0) {
      timeInterval = setInterval(() => {
        setProgressTime((prevProgressTime: number) => prevProgressTime + 1);
      }, 1000);
    }
    return () => clearInterval(timeInterval);
  }, [startStopTime?.mins]);

  return (
    <>
      <div className="heading-x-large">Progress</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 my-4 dark:bg-gray-700">
        <div
          className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
          style={{ width: `${progressTime}%` }}
        ></div>
      </div>
    </>
  );
}

export default Progress;
