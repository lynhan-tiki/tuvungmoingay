import React from 'react';
import { Container, Input } from './styled';

const Check = (p) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.children[1].children[0].focus();
    }
  }, []);
  return (
    <Container ref={ref}>
      <h2>Điền từ vào chỗ trống</h2>
      {p.words.map((item, idx) => {
        return <Input placeholder={item.word} key={item.word} />;
      })}
    </Container>
  );
};

export default Check;
