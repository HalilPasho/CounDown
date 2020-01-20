import React from 'react';
import useTimer from '../../hooks/useTimer';
import './Timer.css';

interface Props {
  time: {
    minutes: number;
    seconds: number;
  };
  onFinish: () => void;
}

function format(number: number): string {
  return number.toString().padStart(2, '0');
}

const Timer: React.FC<Props> = (props) => {
  
  const { minutes, seconds } = useTimer(props);

  return (
    <div className="timer">
      {format(minutes)}:{format(seconds)}
    </div>
  );
};

export default Timer;
