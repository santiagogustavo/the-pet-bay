import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'assets/vendor/fontawesome/css/fontawesome-all.css';
import 'assets/fonts/cream/stylesheet.css';
import 'assets/fonts/roboto/stylesheet.css';
import 'assets/css/main.css';

import Index from './routes';
import Hello from './routes/hello';
import Store from './store';

const App = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <div className="content">
        <Route exact path="/" component={Index} />
        <Route path="/hello" component={Hello} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
