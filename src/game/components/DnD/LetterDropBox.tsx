import React, { useState } from 'react';
import { useDrop, DragObjectWithType } from 'react-dnd';
import Box from '../Box/Box';
import Letter from '../Letter/Letter';

interface Props {
}

const LetterDropBox: React.FC<Props> = () => {

  const [letter, setLetter] = useState('');

  const [, drop] = useDrop({
    accept: 'letter',
    drop: (item: DragObjectWithType & { letter: string }) => {
      setLetter(item.letter);
    },
  })

  if (letter) {
    return (
      <Letter
        letter={letter}
      />
    );
  }

  return (
    <Box ref={drop} />
  );
};

export default LetterDropBox;
