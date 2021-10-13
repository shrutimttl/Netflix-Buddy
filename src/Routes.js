import React, {Suspense} from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    useLocation
} from 'react-router-dom';

const HomePage = React.lazy(() => import('./Home'));
const ContactPage = React.lazy(() => import('./Contact'));
const PrimaryAuthPageSingup = React.lazy(() => import('./Primary_auth/signup'));
const PrimageAuthPageLogin = React.lazy(() => import('./Primary_auth/login'));
const SubscriberAuthPage = React.lazy(() => import('./Subscriber_auth'));

function NoMatch() {
    const location = useLocation();

    return (
        <div>
            <h3>Error 404</h3>
            <p>
                No match for <code>{location.pathname}</code>
            </p>
        </div>
    );
}

export default function Routes() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/primary/signup" component={PrimaryAuthPageSingup} />
                    <Route path="/primary/login" component={PrimageAuthPageLogin} />
                    <Route path="/subscriber" component={SubscriberAuthPage} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Suspense>
        </Router>
    );
}