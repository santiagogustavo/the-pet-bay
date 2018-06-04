import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import 'assets/vendor/fontawesome/css/fontawesome-all.css';
import 'assets/fonts/cream/stylesheet.css';
import 'assets/fonts/roboto/stylesheet.css';
import 'assets/css/main.css';

import Index from './routes';
import Hello from './routes/hello';
import PasswordRecovery from './routes/password-recovery';
import SignIn from './routes/sign-in';
import Store from './store';

class App extends React.Component {
  getChildContext = () => ({ muiTheme: getMuiTheme(baseTheme) });

  render = () => (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="content">
          <Route exact path="/" component={Index} />
          <Route path="/hello" component={Hello} />
          <Route path="/password-recovery" component={PasswordRecovery} />
          <Route path="/sign-in" component={SignIn} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default App;
