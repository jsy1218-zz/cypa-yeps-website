import * as React from 'react'

import NavBar from './components/NavBar';
import Title from './components/Title';
import Keynotes from './components/Keynotes';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';

import './App.css';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="App">
      <div className="App-intro">
        <div className="App-intro-title">
          <NavBar />
          <Title />
        </div>
      </div>
      <div className="keynotes">
        <Keynotes />
      </div>
      <div className="speakers">
        <Speakers />
      </div>
      <div className="agenda">
        <Agenda />
      </div>
    </div>
  );
}

export default App;