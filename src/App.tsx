import * as React from 'react';

import YepsNavBar from './components/YepsNavBar';
import Title from './components/Title';
import Keynotes from './components/Keynotes';
import Speakers from './components/Speakers';

import './App.css';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="App">
      <div className="App-intro">
        <div className="App-intro-title">
          <YepsNavBar />
          <Title />
        </div>
      </div>
      <div className="keynotes">
        <Keynotes />
      </div>
      <div className="speakers">
        <Speakers />
      </div>
    </div>
  );
}

export default App;