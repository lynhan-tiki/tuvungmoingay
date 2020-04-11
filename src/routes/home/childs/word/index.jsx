import React from 'react';

import { Container, English, Sample, Line } from './styled';

const maps = {
  adj: 'Tính từ',
  noun: 'Danh từ',
  verb: 'Động từ',
};
const Word = (p) => {
  return (
    <Container>
      <English>
        <h1>
          {p.word}
          <span style={{ fontSize: '24px', marginLeft: '0', color: '#666' }}>
            (n)
          </span>
        </h1>
        <span style={{ fontSize: '30px' }}>{p.mean}</span>
      </English>
      <span style={{ fontSize: '30px' }}>/{p.pronoun || "'kʌntrisaid"}/</span>
      <Line />
      <Sample>{p.example.en}</Sample>
      <Sample>{p.example.vi}</Sample>
    </Container>
  );
};

export default Word;
