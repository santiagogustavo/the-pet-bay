import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter } from 'react-router-dom';

import '../public/vendor/fontawesome/css/fontawesome-all.css';
import '../public/fonts/cream/stylesheet.css';
import '../public/fonts/roboto/stylesheet.css';
import '../public/css/main.css';

import Index from './routes';
import Hello from './routes/hello';

export const App = () => (
  <BrowserRouter>
    <div className="content">
      <Route exact path="/" component={Index} />
      <Route path="/hello" component={Hello} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
