import React, { useMemo, useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { unique } from './helpers/array';
import Timer from './components/Timer/Timer';
import Header from './components/Header/Header';
import Status from './components/Status';
import LetterGroup from './components/LetterGroup/LetterGroup';
import LetterDropBox from './components/DnD/LetterDropBox';

interface Props {
  words: string[];
  time: {
    minutes: number;
    seconds: number;
  };
}

const Game: React.FC<Props> = ({ words, time }) => {

  const [finished, setFinished] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // TODO: fix this by allowing max letter duplicate depending on words 
  const letters = useMemo(() => unique(words.join('').toUpperCase().split('')), [words]);

  const onTimeFinish = useCallback(() => {
    setFinished(true)
    setSuccess(false);
  }, []);

  return (
    <React.Fragment>
      <DndProvider backend={Backend}>
        <Timer
          time={time}
          onFinish={onTimeFinish}
        />
        <Header
          title={'Create the word by dragging letters into the empty boxes'}
          subTitle={'You have one minute'}
        />
        <LetterGroup
          letters={letters}
          allowDragging={!finished}
        />
        <LetterDropBox/>
        { finished ? <Status success={success} /> : '' }
      </DndProvider>
    </React.Fragment>
  );
};

export default Game;
