import React from 'react';

import { Container, Li, Ul } from './styled';

const Step = (p) => {
  return (
    <Container>
      <Ul>
        {['Khởi động', 'Vượt chướng ngại vật', 'Tăng tốc', 'Về đích'].map(
          (item, idx) => {
            return (
              <Li active={idx <= p.idx} onClick={() => p.setStep(idx)}>{`${
                idx + 1
              }. ${item}`}</Li>
            );
          }
        )}
      </Ul>
    </Container>
  );
};

export default Step;
