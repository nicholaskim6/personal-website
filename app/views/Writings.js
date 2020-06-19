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
	  <p><Link to="/writings/Some_Things_Ive_Learned_From_Philosophy">Some Things I've Learned from Philosophy</Link></p>
	  <p><Link to="/writings/Thoughts_on_My_Music_Education">Thoughts on My Music Education</Link></p>
	  <br></br>
	  <h3>Philosophy (ish)</h3>
	  <p><Link to="/writings/Infinite_Regress_and_the_Problem_of_Induction">Infinite Regress and the Problem of Induction</Link></p>
	  <p><Link to="/writings/Regress_and_Fundamental_Value">Regress and Fundamental Value</Link></p>
	  <br></br>
	  <h3>Random</h3>
	  <p><Link to="/writings/Artificial_Elongation_of_Childhood">Artificial Elongation of Childhood</Link></p>
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
