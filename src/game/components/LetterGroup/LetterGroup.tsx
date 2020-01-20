import React from 'react';
import DraggableLetter from '../DnD/DraggableLetter';
import './LetterGroup.css';

interface Props {
  letters: string[];
  allowDragging: boolean;
}

const LetterGroup: React.FC<Props> = ({ letters, allowDragging }) => {
  return (
    <div className="letter-group">
      {
        letters.map(letter => (
          <DraggableLetter
            letter={letter}
            draggable={allowDragging}
            key={letter}
          />
        ))
      }
    </div>
  );
};

export default LetterGroup;
