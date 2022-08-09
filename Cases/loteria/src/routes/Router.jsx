import React from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import MainPage from '../pages/MainPage';

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'}>
                <MainPage/>
            </Route>
        </Switch>
    </BrowserRouter>
  )
}