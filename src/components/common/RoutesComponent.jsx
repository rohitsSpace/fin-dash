import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../../routes";

const RoutesComponent = ({ debouncedSearchQuery }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component searchQuery={debouncedSearchQuery} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
