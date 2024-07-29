import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { Provider } from "react-redux";
import Body from "./component/Body.jsx";
import Header from "./component/Header.jsx";
import MenuCard from "./component/MenuCard.jsx";
import Error from "./component/Error.jsx";
import About from "./component/About.jsx";
import Offer from "./component/Offer.jsx";
import Cart from "./component/Cart.jsx";
import Menu from "./component/Menu.jsx";
import { ThemeContext } from "./utilities/ThemeContext.jsx";
import appStore from "./utilities/appStore.jsx";

const Grocery = lazy(() => import("./component/Grocery.jsx"));


const ThemeProvider = ({ childElements }) => {
  const [theme, SetTheme] = useState("dark");

  const toggleTheme = () => {
    SetTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {childElements}
    </ThemeContext.Provider>
  );
};

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      
        <div>
          <Header />
          <Outlet />
        </div>

    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading .......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <Menu />,
      }
    ],
    errorElement: <Error />,
  },
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter} />);
