import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import New from './pages/new'
import Show from './pages/show'

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/new' component={New}/>
        <Route path='/show' component={Show} />
        <Route path='/' component={App} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
