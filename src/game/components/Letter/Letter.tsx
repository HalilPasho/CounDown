import React, { forwardRef } from 'react';
import Box from '../Box/Box';
import './Letter.css';

interface Props {
  letter: string;
  status?: 'correct' | 'wrong' | 'dim';
}

const Letter = forwardRef<HTMLDivElement, Props>(({ letter, status }, ref) => {

  let className = '';
  if (status === 'correct') {
    className = 'letter--correct';
  } else if (status === 'wrong') {
    className = 'letter--wrong';
  } else if (status === 'dim') {
    className = 'letter--dim';
  }

  return (
    <Box ref={ref} className={`letter ${className}`}>
      {letter}
    </Box>
  );
});

export default Letter;
