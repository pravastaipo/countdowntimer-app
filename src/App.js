import CountDownTimer from './Components/CountDownTimer';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [days, setDays] = useState(),
    [hours, setHours] = useState(),
    [minutes, setMinutes] = useState(),
    [seconds, setSeconds] = useState(),
    [currentDate, setCurrentDate] = useState('5 july 2023'),
    [inputDate, setInputDate] = useState(currentDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const changeDate = new Date(inputDate);
      const currentDate = new Date();
      const totalTime = changeDate - currentDate;

      if (totalTime > 0) {
        setDays(Math.floor(totalTime / (24 * 60 * 60 * 1000)));
        setHours(Math.floor(Math.floor(totalTime % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)));
        setMinutes(Math.floor(Math.floor(totalTime % (60 * 60 * 1000)) / (1000 * 60)));
        setSeconds(Math.floor(Math.floor(totalTime % (60 * 1000)) / 1000));
      }
    });

    return () => {
      clearInterval(interval);
    };
  });

  //OnChange handler
  const handleInput = (e) => {
    setCurrentDate(e.target.value);
  };

  //onClick handler
  const handleClick = () => {
    setInputDate(currentDate);
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <section className="container">
          <div className="wrapper">
            <p className="input__title">Input Date Time!</p>
            <div className="wrapper__input">
              <input onChange={handleInput} placeholder="Ex: 10 December 2023" />
              <button onClick={handleClick}>INPUT</button>
            </div>
            <div></div>
            <CountDownTimer 
              days={days} 
              hours={hours} 
              minutes={minutes} 
              seconds={seconds} 
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;
