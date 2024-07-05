import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {BodyComponent} from "./component/BodyComponent.jsx"
import {HeaderComponent} from "./component/HeaderComponent.jsx"
import {ShimmerUiComponent} from "./component/ShimmerUIComponent.jsx";
import {Error} from "./component/ErrorComponent.jsx";


const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <BodyComponent />
      <ShimmerUiComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/body",
        element: <BodyComponent />
      },
      {
        path:"/about us",
        element: <AboutComponent />
      },
      {
        path:"/offer",
        element: <OfferComponent />
      },
      {
        path:"/cart",
        element: <CartComponent />
      }
    ],
    errorElement:<Error />,
  }
]);



const Root = ReactDOM.createRoot(document.getElementById("main"));

Root.render(<RouterProvider router={appRouter} />);
