import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';

import { KEYNOTE_ROUTE, SPEAKERS_ROUTE, AGENDA_ROUTE, JOIN_US_ROUTE } from './constants/AppRouterConstants';
import Keynotes from './components/Keynotes';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import JoinUs from './components/JoinUs';

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
                    <Route path={'/' + JOIN_US_ROUTE} component={JoinUs} />
                </Switch>
            </div>
        </Router>
    );
}