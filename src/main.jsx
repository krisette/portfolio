import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Content from './components/Content.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App key="app" />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/",
        element: <Content key="content" /> },
      {
        path: "about",
        element: <AboutMe />,
      },
      {
        path: "experience",
        element: <Experience />,
      }
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<ThemeProvider>
  <RouterProvider router={router} />
  </ThemeProvider>);