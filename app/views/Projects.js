import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Projects</h2>
        </div>
      </header>
	  <div align = "center">
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
	  </div>
    </article>
  </Main>
);

export default Projects;
