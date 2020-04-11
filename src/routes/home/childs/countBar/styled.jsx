import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
export const Li = styled.li`
  background-color: ${(p) => (p.active ? '#ccc' : '#fff')};
  :hover {
    background-color: #ccc;
  }
  font-family: 'Open Sans', sans-serif;
  width: 200px;
  margin: 0 8px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
export const Container = styled.div`
  align-self: center;
  margin-top: 64px;
`;
