import React from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./routes";
import "./app.css";
import Layout from "./page/layout";
const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            ></Route>
          ))}
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
