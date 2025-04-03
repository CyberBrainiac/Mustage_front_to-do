import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error-page/ErrorPage";
import RootLayout from "./ui/layout/RootLayout";
import Home from "./pages/home/Home";
import React from "react";
import UserPolicy from "./pages/userPolicy/UserPolicy";
import About from "./pages/about/About";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userPolicy" element={<UserPolicy />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
