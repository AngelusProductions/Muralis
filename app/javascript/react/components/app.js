import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import MuralShowContainer from '../containers/MuralShowContainer';

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/murals/:id' component={MuralShowContainer} />
      </Router>
    </div>
  );
}

export default App;
