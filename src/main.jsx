import * as React from "react";
import * as ReactDOM from "react-dom/client";

import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import router from "./Routes/Route.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);