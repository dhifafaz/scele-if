import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Layouts from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="Main">
        <Layouts />
      </div>
    </Router>
    
  );
}

export default App;
