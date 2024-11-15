"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
var React = require("react");
// eslint-disable-next-line import/default
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
// Get the root element with a non-null assertion for TypeScript
var rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Root element not found. Make sure there is a <div id='root'></div> in your index.html.");
}
// Create a root and render the app
// eslint-disable-next-line import/no-named-as-default-member
var root = client_1.default.createRoot(rootElement);
root.render(<React.StrictMode>
    <App_1.default />
  </React.StrictMode>);
