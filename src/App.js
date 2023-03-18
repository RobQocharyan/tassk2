import { useState } from "react";
import "./App.css";

function App() {
  const [timerHour, setTimerHour] = useState("hh");
  const [timerMinute, setTimerMinute] = useState("mm");
  const [timerSecond, setTimerSecond] = useState("ss");
  const [second, setSecond] = useState();
  let now = new Date("March 15, 2023 00:00:00").getTime();

  let distance = now + +second * 1000 - now;
  const startTimer = () => {
    setSecond("");

    let interval = setInterval(() => {
      if (distance > 0) {

        var hours = parseInt(((distance / 1000) % 86400) / 3600);
        var minutes = parseInt((((distance / 1000) % 86400) % 3600)/60);
        var seconds =  parseInt((((distance / 1000) % 86400) % 3600)%60);
        distance-=1000

      }

      if (distance < 0) {
        // stop our time
        clearInterval(interval);
      } else if (seconds > 0) {
        // update our time
        setTimerHour(hours);
        setTimerMinute(minutes);
        setTimerSecond(seconds);
      }
    }, 1000);
  };

  return (
    <div className="timer">
      <div className="second">
        <input
          type={"number"}
          placeholder={"Second"}
          onChange={(e) => setSecond(e.target.value)}
          value={second}
        />
        <button onClick={startTimer}>Start</button>
      </div>
      <span>{timerHour <= 9 ? "0" + timerHour : timerHour}</span>
      <span>:</span>
      <span>{timerMinute <= 9 ? "0" + timerMinute : timerMinute}</span>
      <span>:</span>
      <span>{timerSecond <= 9 ? "0" + timerSecond : timerSecond}</span>
    </div>
  );
}

export default App;
