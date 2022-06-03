import React, { Suspense, lazy } from "react";
import { Routes as RRoutes, Route } from "react-router-dom";
import Layout from "../Layout";
const Category = lazy(() => import("../pages/Category"));

function NoMatchPage() {
  return (
    <div>
      <h2>no page founded</h2>
    </div>
  );
}

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Category />} />
          <Route path=":id" element={<Category />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </RRoutes>
    </Suspense>
  );
};

export default Routes;
