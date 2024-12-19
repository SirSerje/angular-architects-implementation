import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  const reactVersion = require('./package.json').dependencies['react'];
  const [state, setState] = useState(5)
  return <div><h1>
      React
    </h1>
    <p>
      React Version: {reactVersion}
    </p>
    <p>react (rspack built) module federated</p>
  <p>fake counter: {state}</p>
    <button onClick={()=>setState(state+1)}>increment</button>
  </div>

}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define('react-element', Mfe4Element);
