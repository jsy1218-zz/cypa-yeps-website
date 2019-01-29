import * as React from 'react'

import NavBar from './components_desktop/NavBar';
import Title from './components_desktop/Title';
import Keynotes from './components_desktop/Keynotes';
import Speakers from './components_desktop/Speakers';
import Agenda from './components_desktop/Agenda';

import './App.css';
import JoinUs from './components_desktop/JoinUs';
import Sponsors from './components_desktop/Sponsors';
import Connections from './components_desktop/Connections';
import { KEYNOTE_ROUTE, SPEAKERS_ROUTE, AGENDA_ROUTE } from './constants/AppRouterConstants';

export const AppDesktop: React.StatelessComponent<{}> = () => {
  return (
    <div className="App">
      <div className="App-intro">
        <div>
          <NavBar />
          <Title />
        </div>
      </div>
      <div className="Keynotes" id={KEYNOTE_ROUTE}>
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

export default AppDesktop;