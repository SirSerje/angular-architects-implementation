import React from 'react';
import _ from 'lodash';
import { BrowserRouter } from 'react-router';
//@ts-ignore
import * as X from 'rxjs';
console.log('rxjs content in react?', X);
// FIXME: once react-router will be invoked, all setup will be broken
// console.log(BrowserRouter);

// for routing purposes
const A = () => <p>Component A</p>;
const B = () => <p>Component B</p>;

export function App() {
  const isTrue = _.isString('string');
  return (
    <div id="container">
      <h1>Remote 2 example</h1>
      <p>{isTrue ? 1 : 0}</p>
    </div>
  );
}
