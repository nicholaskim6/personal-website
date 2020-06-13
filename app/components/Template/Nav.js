import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';


const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`https://raw.githubusercontent.com/nicholaskim6/mywebsite/master/public/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nick Kim</h2> 
		<p><a href="mailto:nk6@princeton.edu">nk6@princeton.edu</a></p>
      </header>
    </section>

    <section className="blurb" id = "blurb1">
      <h2>About</h2>
      <p>Hi, I&apos;m Nick. 
			I'm currently a third year student at Princeton in the <a href="https://orfe.princeton.edu/home">Operations Research and Financial Engineering</a> department
			pursuing minors in computer science, statistics/machine learning, and philosophy.
            Among other things, I'm interested in finance, music, and gaming.
      </p>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright"> <Link to="/">nicholaskim</Link></p>
    </section>
  </section>
);

export default Nav;


