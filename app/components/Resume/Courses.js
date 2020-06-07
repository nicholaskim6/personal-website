import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) => courses.sort((a, b) => {
  let ret = 0;
  if (a.university > b.university) ret = -1;
  else if (a.unversity < b.university) ret = 1;
  else if (a.number > b.number) ret = 1;
  else if (a.number < b.number) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Selected Coursework</h3>
    </div>
    <ul className="course-list">
      <p> <b>Mathematics</b> - Multivariable Calculus, Linear Algebra, Discrete Mathematics, Optimization, Real Analysis (Fall 2020) </p>
	  <p> <b>Computer Science</b> - Algorithms and Data Structures, Systems Programming, Fundamentals of Machine Learning</p>
	  <p> <b>Statistics/Probability</b> - Probability and Stochastic Systems, Simulation, Risk Analysis, Time Series Analysis (Fall 2020)</p>
	  <p> <b>Quantitative Finance/Economics</b> - High Frequency Trading, Financial Mathematics, Risk Management, Intermediate Microeconomics</p>
	  <p> <b>Philosophy</b> - Philosophy of Quantum Mechanics, Moral Philosophy, Philosophy of Probability Theory, British Empiricism, Intermediate Epistemology (Fall 2020)</p>
      <p> <b>Miscellaneous</b> - Physics I/II, Corporate Finance, Accounting, Writing Seminar, Projects in Instrumental Performance</p>
	</ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    univerity: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
