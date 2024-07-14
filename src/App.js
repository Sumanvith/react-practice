import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Hooks from "./components/Hooks";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => (
  <div>
    <Header />
    <Outlet /> {/* This will render the children routes */}
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Using the layout to include Header and Body
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "hooks",
        element: <Hooks />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
