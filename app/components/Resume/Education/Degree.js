import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
	  <h3 className="school"><b>{data.school}</b> - {data.year}</h3>
      <h4 className="degree"> B.S.E. {data.degree}</h4>
	  <h4 className="degree">{data.minor}</h4>
	  <p></p>
	  <h4 className="degree">{data.thesis}</h4>
	  <h4 className="activities">{data.activities}</h4>
	  <br></br>
	  </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
