import React from 'react';

import { Container, Ul, Li } from './styled';

const CountBar = (p) => {
  const { words, idx, setIdx } = p;
  return (
    <Container>
      <Ul>
        {words.map((_, item) => (
          <Li active={idx === item} onClick={() => setIdx(item)}>
            <h4>{_.word}</h4>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default CountBar;
