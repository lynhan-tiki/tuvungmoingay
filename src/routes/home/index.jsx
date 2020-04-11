import React from 'react';

import { Check, CountBar, Final, Match, Step, Word } from './childs';
import { Container } from './styled';
import { dictionaries } from './translate';

const Home = (props) => {
  const [idx, setIdx] = React.useState(0);
  const [step, setStep] = React.useState(3);
  const words = dictionaries.slice(0, 5);
  const word = words[idx];
  return (
    <Container>
      {(() => {
        if (step === 0) {
          return (
            <>
              <Word {...word} />
              <CountBar idx={idx} setIdx={setIdx} words={words} />
            </>
          );
        }
        if (step === 1) {
          return <Check words={words} />;
        }
        if (step === 2) {
          return <Match words={words} />;
        }
        if (step === 3) {
          return <Final />;
        }
      })()}
      <Step idx={step} setStep={setStep} />
    </Container>
  );
};

export default Home;
