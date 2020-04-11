import React from 'react';
import styled from 'styled-components';
import success from './statics/success.svg';
import warning from './statics/warning.svg';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  input {
    height: 56px;
    border-radius: 4px;
    outline: none;
    padding: 8px 24px;
    border: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    font-weight: bold;
    font-size: 24px;
  }
  img {
    position: absolute;
    margin-right: -10px;
    right: 16px;
  }
`;
export const Input = (p) => {
  const [v, setV] = React.useState('');
  const [visited, setVisited] = React.useState(false);
  return (
    <InputContainer>
      <input
        {...p}
        onChange={(e) => setV(e.target.value)}
        value={v}
        onBlur={() => setVisited(true)}
      />
      {visited && <img src={v === p.word ? success : warning} alt={''} />}
    </InputContainer>
  );
};
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 64px;
  ${InputContainer} {
    margin: 32px 0;
  }
`;
