import React, { useEffect, useState } from "react";
import "./App.css";

export default function Timer() {
  const [time, setTime] = useState(3661);
  const [isRunning, setIsRunning] = useState(false);

  function formatTime() {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = time % 60;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(
      2,
      "0"
    )}:${String(second).padStart(2, "0")}`;
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((preveTime) => (preveTime > 0 ? preveTime - 1 : 0));
      }, 1000);
      
    }
    return()=> clearInterval(interval)
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }
  function handlePause() {setIsRunning(false)}
  function handleReset() {setTime(3661)
    setIsRunning(false)
  }
  return (
    <div className="timer-container">
      <h1 className="timer-display">{formatTime(time)}</h1>
      <div className="timer-buttons">
        <button className="start-button" onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button className="pause-button" onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button className="reset-button" onClick={handleReset} disabled={isRunning}>
          Reset
        </button>
      </div>
    </div>
  );
}
