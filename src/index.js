import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();