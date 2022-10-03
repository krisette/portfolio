import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Content from './components/Content.jsx';
import AboutMe from './components/AboutMe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App key="app" />,
    children: [
      { path: "/",
        element: <Content key="content" /> },
      {
        path: "about",
        element: <AboutMe />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);