import React from 'react';

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// import { CryproScreenerScreen } from 'screens';

import UILayout from '../UILayout';

import './App.css';

interface AppProps {}

interface DefaultProps {}

class App extends React.Component<AppProps & DefaultProps> {
  static defaultProps: DefaultProps = {};

  state = {};

  componentWillMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <Router>
        <UILayout>
          <div>Test</div>
          <Switch>
            /* Routes for CryptoScreener screen */
            <Route exact path='/'>
              <div>APP</div>
              {/* <Redirect to='/screener' /> */}
            </Route>
            {/* <Route exact path='/screener' component={CryproScreenerScreen} /> */}
          </Switch>
        </UILayout>
      </Router>
    );
  }
}

export default App;
