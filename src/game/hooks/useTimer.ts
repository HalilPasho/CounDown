import { useEffect, useState } from 'react';

interface Props {
  time: {
    minutes: number;
    seconds: number;
  };
  onFinish: () => void;
}

export default function useTimer({ time, onFinish }: Props) {

  const [minutes, setMinutes] = useState(time.minutes);
  const [seconds, setSeconds] = useState(time.seconds);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
        onFinish();
      }
    }, 1000);

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  return {
    minutes,
    seconds,
  };
};
