import React from 'react';
import congrates from './statics/congrate.png';

import { Container } from './styled';

const Step = (props) => {
  return (
    <Container>
      <img src={congrates} alt="" />
      <h1>Bạn làm rất tốt!</h1>
      <p>Đăng kí thành viên để lưu lại hành trình học của bạn.</p>
      <p>Bắt đầu 5 từ khác tại đây</p>
    </Container>
  );
};

export default Step;
