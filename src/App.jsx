import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import 'assets/vendor/fontawesome/css/fontawesome-all.css';
import 'assets/fonts/cream/stylesheet.css';
import 'assets/fonts/roboto/stylesheet.css';
import 'assets/css/main.css';

import Index from './routes';
import Route404 from './routes/404';
import Hello from './routes/hello';
import PasswordRecovery from './routes/password-recovery';
import Product from './routes/product';
import Shop from './routes/shop';
import SignIn from './routes/sign-in';
import SignUp from './routes/sign-up';
import { Store, Persistor } from './store';

class App extends React.Component {
  getChildContext = () => ({ muiTheme: getMuiTheme(baseTheme) });

  render = () => (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <BrowserRouter>
          <div className="content">
            <Route exact path="/" component={Index} />
            <Route path="/404" component={Route404} />
            <Route path="/hello" component={Hello} />
            <Route path="/password-recovery" component={PasswordRecovery} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/:id" component={Product} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default App;
