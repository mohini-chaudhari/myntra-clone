import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import Bag from "./routes/Bag";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import {Provider} from 'react-redux';
import myntraStore from './store/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


