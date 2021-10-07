import React from 'react';


import Research from './research/research-container';
import { GutterLeft, GutterRight } from './gutter/gutter';

import './home.css';

const Home = () => (
  <>
    
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">
        
        <Research />
        
      </div>
      <GutterRight />
    </div>
  </>
);

export default Home;
