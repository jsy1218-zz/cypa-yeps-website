import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import './App.css'; 

import { KEYNOTE_ROUTE, SPEAKERS_ROUTE, AGENDA_ROUTE, CONNECTIONS_ROUTE } from './constants/AppRouterConstants';
import Keynotes from './components/Keynotes';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Connections from './components/Connections';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router>
            <div className="container-fluid">
                <Route component={App} />
                <Switch>
                    <Route path='#' component={App} />
                    <Route path={'/' + KEYNOTE_ROUTE} component={Keynotes} />
                    <Route path={'/' + SPEAKERS_ROUTE} component={Speakers} />
                    <Route path={'/' + AGENDA_ROUTE} component={Agenda} />
                    <Route path={'/' + CONNECTIONS_ROUTE} component={Connections} />
                </Switch>
            </div>
        </Router>
    );
}