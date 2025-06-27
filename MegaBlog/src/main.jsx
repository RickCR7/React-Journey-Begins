import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import { Authlayout, Login } from "./components/index.js";
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Authlayout authentication>
            <AllPosts />
          </Authlayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Authlayout authentication>
            <AddPost />
          </Authlayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Authlayout authentication>
            <EditPost />
          </Authlayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post/>
        
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
