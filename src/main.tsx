import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import Home from "./pages/home";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
            index: true,
            element: <Home/>,
        },
    ],
    },
  ]);
  

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Elemento com ID 'app' não encontrado no DOM.");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
