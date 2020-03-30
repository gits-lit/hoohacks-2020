import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './store';

import Cards from './components/Cards';
import Home from './containers/Home';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/cards" component={Cards} />
            <Route path="/" component={Home} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
