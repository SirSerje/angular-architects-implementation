import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];

    return ([
        <h1>
          React
        </h1>,
        <p>
          React Version: {reactVersion}
        </p>
    ])
  }
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-element', Mfe4Element);
