import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./pages/home";
import User from "./pages/user";
import UserAlbums from "./pages/user-albums";
import Album from "./pages/album";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path:"album/:id",
        element: <Album />
      },
      {
        path:"user/:id/albums",
        element: <UserAlbums />
      }
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
