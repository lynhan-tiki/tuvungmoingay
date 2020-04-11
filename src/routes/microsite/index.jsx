import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const Microsite = (props) => {
  return (
    <Container>
      <Link to="/home">Bắt đầu</Link> bài học của bạn hôm nay
    </Container>
  );
};

export default Microsite;
