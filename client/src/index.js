import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Redux Store & Provider
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Actions
import { loadTournaments } from './actions/tournamentActions';

// Components
import Header from './components/common/header';
import Footer from './components/common/footer';
import Bracket from './components/tournament/Bracket';
import AddTournament from './components/tournament/AddTournament';
import AllTournaments from './components/tournament/AllTournaments';
// import Tournament from '../../src/Tournament';
// init STORE and dispatchers
const store = configureStore();
store.dispatch(loadTournaments());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Route exact strict path="/new/tournament" component={AddTournament} />
        <Route path="/tournament/:id" component={Bracket} />
        <Route path="/tournaments" component={AllTournaments} />
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
module.hot.accept();
