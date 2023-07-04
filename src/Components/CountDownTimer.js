import '../App.css';

const CountDownTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <section className="container__timer">
        <div className="wrapper__timer">
          <p>{days}</p>
          <span>Days</span>
        </div>
        <span className="break">:</span>
        <div className="wrapper__timer">
          <p>{hours}</p>
          <span>Hours</span>
        </div>
        <span className="break">:</span>
        <div className="wrapper__timer">
          <p>{minutes}</p>
          <span>Minutes</span>
        </div>
        <span className="break">:</span>
        <div className="wrapper__timer">
          <p>{seconds}</p>
          <span>Seconds</span>
        </div>
      </section>
    </>
  );
};

export default CountDownTimer;
