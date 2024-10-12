// src/main.jsx (or wherever your routes are defined)

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import Search from "./pages/Search.jsx";
import SingleProduct from "./pages/products/SingleProduct.jsx";
import axios from "axios";
import Recipes from "./pages/products/Recipes.jsx";
import Resources from "./pages/resources/Resources.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import SignOut from "./pages/Auth/Signout.jsx";
import Starter from "./starter/Starter.jsx";
// Import the SignOut component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/items/:id",
        element: <SingleProduct />,
        loader: async ({ params }) => {
          try {
            const response = await axios.get(
              `http://localhost:3000/api/items/${params.id}`
            );
            return response.data; // Access data directly from axios
          } catch (error) {
            console.error("Failed to fetch item", error);
          }
        },
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/signout", // Add signout route
        element: <SignOut />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
