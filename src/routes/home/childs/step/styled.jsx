import styled from 'styled-components';

export const Li = styled.li`
  padding: 4px;
  margin: 0 32px;
  cursor: pointer;
  color: ${(p) => (p.active ? '#000' : '#ccc')};
  font-weight: bold;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  background: #fff;
  width: 100%;
  bottom: 0;
`;
