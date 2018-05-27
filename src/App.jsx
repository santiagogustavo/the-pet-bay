import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'vendor/fontawesome/css/fontawesome-all.css';
import 'fonts/cream/stylesheet.css';
import 'fonts/roboto/stylesheet.css';
import 'css/main.css';

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
