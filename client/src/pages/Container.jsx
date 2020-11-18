import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./HomePage";
import TrendingPage from "./TrendingPage";
import WatchedPage from "./WatchedPage";
import MoviePage from "./MoviePage"
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function Container({location}) {
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 1000, exit: 100 }}
                classNames={'fade'}
            >
                <Switch location={location}>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/watched'>
                        <WatchedPage />
                    </Route>
                    <Route path='/trending'>
                        <TrendingPage />
                    </Route>
                    <Route path='/movie/:movieId' component={MoviePage}></Route>
                </Switch>

            </CSSTransition>
        </TransitionGroup>

    );
}

export default withRouter(Container);