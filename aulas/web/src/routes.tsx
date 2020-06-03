import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
// <Route component={Home} path="/" exact /> -> exact força rota a ser exata
const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/cadastro" />
        </BrowserRouter>
    );
}

export default Routes;