import React, { useState } from 'react';
import { useDrag } from 'react-dnd'
import Letter from '../Letter/Letter';

interface Props {
  letter: string;
  draggable: boolean;
}

const DraggableLetter: React.FC<Props> = ({ letter, draggable }) => {

  const [didDrop, setDidDrop] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    item: { letter, type: 'letter' },
    canDrag: () => draggable && !didDrop,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        setDidDrop(true);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Letter
      ref={drag}
      letter={letter}
      status={isDragging || didDrop ? 'dim' : undefined}
    />
  );
};

export default DraggableLetter;
