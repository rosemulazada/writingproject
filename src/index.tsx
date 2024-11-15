import 'module-alias/register';
import * as React from 'react';
// eslint-disable-next-line import/default
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// Get the root element with a non-null assertion for TypeScript
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure there is a <div id='root'></div> in your index.html."
  );
}

// Create a root and render the app
// eslint-disable-next-line import/no-named-as-default-member
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
