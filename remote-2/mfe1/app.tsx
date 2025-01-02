import React from 'react';
import _ from 'lodash';
import { BrowserRouter } from 'react-router';
//@ts-ignore
import * as X from 'rxjs';


export function App() {
  const isTrue = _.isString('asdf');
  return (
    <div id="container">
        <h1>Remote 2 example</h1>
      <p>{isTrue ? 1 : 0}</p>
    </div>
  );
}
