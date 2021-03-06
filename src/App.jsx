import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
import Route500 from './routes/500';
import EditAccount from './routes/edit-account';
import EditPet from './routes/edit-pet';
import Hello from './routes/hello';
import MyAccount from './routes/my-account';
import MyAgenda from './routes/my-agenda';
import MyPets from './routes/my-pets';
import NewPet from './routes/new-pet';
import PasswordRecovery from './routes/password-recovery';
import Pet from './routes/pet';
import Product from './routes/product';
import Service from './routes/service';
import Services from './routes/services';
import Shop from './routes/shop';
import ShoppingCart from './routes/shopping-cart';
import SignIn from './routes/sign-in';
import SignUp from './routes/sign-up';
import { Store, Persistor } from './store';

class App extends React.Component {
  getChildContext = () => ({ muiTheme: getMuiTheme(baseTheme) });

  render = () => (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/404" component={Route404} />
            <Route path="/500" component={Route500} />
            <Route path="/edit-account" component={EditAccount} />
            <Route path="/edit-pet/:id" component={EditPet} />
            <Route path="/hello" component={Hello} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/my-agenda" component={MyAgenda} />
            <Route exact path="/my-pets" component={MyPets} />
            <Route path="/my-pets/new" component={NewPet} />
            <Route path="/my-pets/:id" component={Pet} />
            <Route path="/password-recovery" component={PasswordRecovery} />
            <Route exact path="/services" component={Services} />
            <Route path="/services/:id" component={Service} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/shop/:id" component={Product} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default App;
