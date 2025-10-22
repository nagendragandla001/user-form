import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import { lazy, Suspense } from "react";
import { ROUTES } from "./utils/routeConfig";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {ROUTES.map((route) => {
          const Component = lazy(route.component);
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback="Component is Laoding....">
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
