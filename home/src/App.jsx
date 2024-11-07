import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const App = () => (
  <div className="max-w-6xl mx-auto text-3xl">
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

export default App;
