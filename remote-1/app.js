import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  HashRouter,
  MemoryRouter
} from "react-router";
import './style.css'


export const A = () => <p className='page-container'>Page <code>A</code> content</p>
export const B = () => <p className='page-container'>Page <code>B</code> content</p>

const App = () => {
  const reactVersion = require('./package.json').dependencies['react'];

  const [state, setState] = useState(5)
  return <HashRouter>
    <div className='app-container'><h1>
      React
    </h1>
      <p>
        React Version: {reactVersion}
      </p>
      <p>react (rspack built) module federated</p>
      <p>fake counter: {state}</p>
      <button onClick={() => setState(state + 1)}>increment</button>
      <h3>internal links</h3>
      <p><Link to='/a' className="link">Page A</Link>
        <Link to='/b' className="link">Page B</Link></p>
        
      <h3>internal pages:</h3>

      <Routes>
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/" element={<B />} />

      </Routes>
    </div>
  </HashRouter>

}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define('react-element', Mfe4Element);
