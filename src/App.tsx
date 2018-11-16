import * as React from 'react'

import NavBar from './components/NavBar';
import Title from './components/Title';
import Keynotes from './components/Keynotes';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';

import './App.css';
import JoinUs from './components/JoinUs';
import Sponsors from './components/Sponsors';
import Connections from './components/Connections';
import { KEYNOTE_ROUTE, SPEAKERS_ROUTE, AGENDA_ROUTE } from './constants/AppRouterConstants';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="App">
      <div className="App-intro">
        <div className="App-intro-title">
          <NavBar />
          <Title />
        </div>
      </div>
      <div className="keynotes" id={KEYNOTE_ROUTE}>
        <Keynotes />
      </div>
      <div className="speakers" id={SPEAKERS_ROUTE}>
        <Speakers />
      </div>
      <div className="agenda" id={AGENDA_ROUTE}>
        <Agenda />
      </div>
      <div className="join-us">
        <JoinUs />
      </div>
      <div className="sponsors">
        <Sponsors />
      </div>
      <div className="connections">
        <Connections />
      </div>
    </div>
  );
}

export default App;