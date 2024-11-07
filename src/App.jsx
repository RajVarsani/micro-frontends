import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "home/app";
import Dashboard from "dashboard/app";

import "./index.scss";

const UIComponentMapper = {
  home: Home,
  dashboard: Dashboard,
};

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const ActiveComponent = UIComponentMapper[activeTab];

  return (
    <div className="flex flex-col max-w-6xl gap-12 px-6 mx-auto mt-10">
      <div className="text-4xl font-semibold text-slate-900">
        Welcome to Micro Frontends
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          {Object.keys(UIComponentMapper).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl capitalize ${
                activeTab === tab
                  ? "bg-slate-700 text-white"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-8 rounded-xl bg-slate-100">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
