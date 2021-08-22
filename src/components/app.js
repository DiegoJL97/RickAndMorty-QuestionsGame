import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Questions from '../pages/questions'
import Score from '../pages/score'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/questions" component={Questions}></Route>
            <Route exact path="/score" component={Score}></Route>
            <Route component={Home}></Route>
        </Switch>
    </BrowserRouter>
)

export default App;