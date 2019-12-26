import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteContainer from './Containers/QuoteContainer';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


function App() {
  return (
    <div className="App">
      <QuoteContainer />
    </div>
  );
}

export default App;
