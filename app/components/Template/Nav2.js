import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';


const Nav2 = () => (
  <section id="sidebar">
    <section id="intro2">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nick Kim</h2> 
		<p><a href="mailto:nk6@princeton.edu">nk6@princeton.edu</a></p>
      </header>
    </section>

    <section className="blurb" id = 'blurb2'>
      <h2>About</h2>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer2">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright"> <Link to="/">nicholaskim</Link>.</p>
    </section>
  </section>
);

export default Nav2;


