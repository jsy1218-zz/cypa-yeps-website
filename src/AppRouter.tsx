import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router>
            <div className="container-fluid">
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </div>
        </Router>
    );
}