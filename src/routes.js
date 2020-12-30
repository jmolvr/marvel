import React from 'react';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Main from './pages/Main';
import CharacterPage from './pages/Character';
import NotFound from './pages/NotFound';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:page" exact component={Main} />
                <Route path="/" exact>
                    <Redirect to="/1"/>
                </Route>
                <Route path="/character/:id/series/:page?" exact component={CharacterPage} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}