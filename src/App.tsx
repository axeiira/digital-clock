import { useState, useEffect } from "react"

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<Time>({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentTime = new Date();
      setTime({
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <div className="font-black text-[200px]">
      {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
    </div>
  );
};

function App() {
  return (
    <>
    <div className="text-center mt-40">
      <h1 className="font-semibold text-[50px]"> Digital Clock </h1>
      <p className="font-light text-[40px["> Time zone in Surabaya, East Java (GMT+7) </p>
    </div>
    <div className="text-center mt-0">
      <DigitalClock />
    </div>
    </>
  );
}

export default App;
