import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories';
import home from './home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={home} />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}