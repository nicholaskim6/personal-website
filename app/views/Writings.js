import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/writings.md';

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main>
    <Helmet title="Writings" />
    <article className="post" id="generalmd">
      <header>
        <div className="title">
          <h2>Writings</h2>
        </div>
      </header>
	  <div>
	  <p>Here you can find my informal thoughts/writings on various matters.</p>
	  <br></br>
	  <h3>Self</h3>
	  <p><Link to="/writings/Some_Things_Ive_Learned_From_Philosophy">Some Things I've Learned from Philosophy - (6/8/20)</Link></p>
	  <p><Link to="/writings/Thoughts_on_My_Music_Education">Thoughts on My Music Education - (6/9/20)</Link></p>
	  <br></br>
	  <h3>Philosophy (ish)</h3>
	  <p>Infinite Regress and the Problem of Induction</p>
	  <p>Regress and Morality</p>
	  <p>Egoism Collapsing into Utilitarianism</p>
	  <br></br>
	  <h3>Random</h3>
	  <p>Artificial Elongation of Childhood</p>
	  </div>
	  <br></br>
	  {/*
     <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
	  */}
    </article>
  </Main>
);

export default About;
