import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main id>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome</Link></h2>
          <p>A personal website/self-introduction</p>
        </div>
      </header>
      <p> Welcome to my website. 
	  This site includes a general <Link to="/about">self-introduction</Link>, {' '}
      my <Link to="/resume">resume</Link>, {' '}
      selected <Link to="/projects">projects</Link>, {' '}
      documentation of my <Link to="/interests">personal interests</Link>, {' '}
	  and an informal collection of various thoughts <Link to="/writings">(writings)</Link>. {' '}
      </p>
      <p> This <a href="https://github.com/mldangelo/personal-site">website</a> was written with reactJS.</p>
    </article>
  </Main>
);

export default Index;
