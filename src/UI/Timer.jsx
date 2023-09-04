import React from 'react';
import Button from './Button';

const Timer = ({ theme, placeBid }) => {
  return (
    <div className={`timer ${theme ? `theme--${theme}` : ''}`}>
      <p>Auction ends in:</p>
      <div className="timer__grid" style={{ marginBottom: placeBid ? `30px` : '' }}>
        <div className="timer__figures">59</div>
        <div className="timer__figures">:</div>
        <div className="timer__figures">59</div>
        <div className="timer__figures">:</div>
        <div className="timer__figures">59</div>
        <div>Hours</div>
        <div></div>
        <div>Minutes</div>
        <div></div>
        <div>Seconds</div>
      </div>
      {placeBid && <Button value="Place Bid" color="purple" size="fill" />}
    </div>
  );
};

export default Timer;
