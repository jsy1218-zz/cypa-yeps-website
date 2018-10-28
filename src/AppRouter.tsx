import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';

import { KEYNOTE_ROUTE, SPEAKERS_ROUTE } from './constants/AppRouterConstants';
import Keynotes from './components/Keynotes';
import Speakers from './components/Speakers';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router>
            <div className="container-fluid">
                <Route component={App} />
                <Switch>
                    <Route path={'/' + KEYNOTE_ROUTE} component={Keynotes} />
                    <Route path={'/' + SPEAKERS_ROUTE} component={Speakers} />
                </Switch>
            </div>
        </Router>
    );
}