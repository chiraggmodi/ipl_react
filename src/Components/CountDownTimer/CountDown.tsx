
const CountDown = ({date}: any) => {
    return (
        <div className="next_match_count float_left">

        <div id="clockdiv" data-deadline={date}>
          <div>
            <span className="days"></span>
            <div className="smalltext">Days</div>
          </div>
          <div>
            <span className="hours"></span>
            <div className="smalltext">Hours</div>
          </div>
          <div>
            <span className="minutes"></span>
            <div className="smalltext">Minutes</div>
          </div>
          <div>
            <span className="seconds"></span>
            <div className="smalltext">Seconds</div>
          </div>
        </div>
      </div>
    );
};

export default CountDown;