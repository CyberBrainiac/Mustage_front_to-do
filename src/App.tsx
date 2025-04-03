import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error-page/ErrorPage";
import RootLayout from "./ui/layout/RootLayout";
import Home from "./pages/home/Home";
import ThematicityIndex from "./pages/themat-index/ThematicityIndex";
import React from "react";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/tools/thematicity-index" element={<ThematicityIndex />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
