import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AddUser from './pages/AddUser';
import ListUser from './pages/ListUser';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListUser} />
                <Route path="/add" component={AddUser} />
            </Switch>
        </BrowserRouter>
    );
}
