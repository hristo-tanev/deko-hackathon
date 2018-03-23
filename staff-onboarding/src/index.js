import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import New from './pages/new'
import Show from './pages/show'
import {configureStore} from './store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/new' component={New}/>
          <Route path='/show' component={Show} />
          <Route path='/' component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
