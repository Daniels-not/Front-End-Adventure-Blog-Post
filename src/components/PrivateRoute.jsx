import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { currentUser } = useAuth();

    return (
        <Route
        {...rest}
        render={props => {
            return currentUser ? <Component {...props} /> : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
        }}
        ></Route>
    );
}

export default PrivateRoute;