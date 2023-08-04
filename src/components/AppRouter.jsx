import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privatRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE, user} from "../utils/consts";

const AppRouter = () => {
    return user ?
        (
            <Switch>
                {privatRoutes.map(({path, Component}, i) =>
                    <Route key={i} path={path} component={Component} exact/>
                )}
                <Redirect to={CHAT_ROUTE}/>
            </Switch>
        ) : (
            <Switch>
                {publicRoutes.map(({path, Component}, i) =>
                    <Route key={i} path={path} component={Component} exact/>
                )}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
};

export default AppRouter;

