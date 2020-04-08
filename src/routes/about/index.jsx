import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  return (
    <div>
      this is about
      <Link to="/home">Home</Link>
    </div>
  );
};

About.propTypes = {};

export default About;
