import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: auto;
  margin-top: 128px;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
`;
export const English = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: 'Pacifico', cursive;
  h1 {
    margin: 0;
    font-size: 60px;
    color: #666;
  }
  span {
    font-size: 30px;
    margin: 0;
    margin-top: 12px;
    color: #888;
    margin-left: 12px;
  }
`;
export const Sample = styled.p`
  margin: 0;
`;
export const Line = styled.i`
  width: 100%;
  margin: 16px 0;
  display: block;
  height: 4px;
  background-color: #666;
`;
