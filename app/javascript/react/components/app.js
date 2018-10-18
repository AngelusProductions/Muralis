import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import MuralsShowContainer from '../containers/MuralsShowContainer';

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/murals/:id' component={MuralsShowContainer} />
      </Router>
    </div>
  );
}

export default App;
