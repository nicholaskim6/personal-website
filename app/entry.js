import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Interests from './views/Interests';
import Writings from './views/Writings';

import SomeThingsIveLearnedfromPhilosophy from './views/Writings/Some_Things_Ive_Learned_from_Philosophy';
import ThoughtsonMyMusicEducation from './views/Writings/Thoughts_on_My_Music_Education';

import InfiniteRegressandtheProblemofInduction from './views/Writings/Infinite_Regress_and_the_Problem_of_Induction';
import RegressandFundamentalValue from './views/Writings/Regress_and_Fundamental_Value';

import ArtificialElongationofChildhood from './views/Writings/Artificial_Elongation_of_Childhood';

import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/interests" component={Interests} />
	  
	  /* Writings articles */
	  <Route path="/writings/Some_Things_Ive_Learned_from_Philosophy" component={SomeThingsIveLearnedfromPhilosophy} />
	  <Route path="/writings/Thoughts_on_My_Music_Education" component={ThoughtsonMyMusicEducation} />
	  
	  <Route path ="/writings/Infinite_Regress_and_the_Problem_of_Induction" component={InfiniteRegressandtheProblemofInduction} />
	  <Route path ="/writings/Regress_and_Fundamental_Value" component={RegressandFundamentalValue} />
	  
	  <Route path ="/writings/Artificial_Elongation_of_Childhood" component={ArtificialElongationofChildhood} />
	  
      <Route path="/writings" component={Writings} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
