import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AppDesktop from './AppDesktop';

import { KEYNOTE_ROUTE, SPEAKERS_ROUTE, AGENDA_ROUTE, JOIN_US_ROUTE } from './constants/AppRouterConstants';
import Keynotes from './components_desktop/Keynotes';
import Speakers from './components_desktop/Speakers';
import Agenda from './components_desktop/Agenda';
import JoinUs from './components_desktop/JoinUs';

export const DesktopAppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router>
            <div className="container-fluid">
                <Route component={AppDesktop} />
                <Switch>
                    <Route path='#' component={AppDesktop} />
                    <Route path={'/' + KEYNOTE_ROUTE} component={Keynotes} />
                    <Route path={'/' + SPEAKERS_ROUTE} component={Speakers} />
                    <Route path={'/' + AGENDA_ROUTE} component={Agenda} />
                    <Route path={'/' + JOIN_US_ROUTE} component={JoinUs} />
                </Switch>
            </div>
        </Router>
    );
}