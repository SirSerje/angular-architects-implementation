import React from 'react';
import _ from 'lodash';
import { BrowserRouter } from 'react-router';

export function App() {
  const isTrue = _.isString('asdf');
  return (
    <div id="container">
      <BrowserRouter>
        <h1>Remote 2 example</h1>
      </BrowserRouter>
      <p>{isTrue ? 1 : 0}</p>
    </div>
  );
}
