import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import CharacterPage from './pages/Character';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/character/:id" exact component={CharacterPage}/>
            </Switch>
        </BrowserRouter>
    );
}