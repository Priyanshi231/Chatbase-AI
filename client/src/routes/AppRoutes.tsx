import { Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import NotFoundPage from "../pages/errors/NotFoundPage";
import ProtectedRoute from "../components/auth/ProtectedRoute";

function AppRoutes() {
  return (
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route
              path="/dashboard"
              element={
                  <ProtectedRoute>
                      <DashboardPage />
                  </ProtectedRoute>
              }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default AppRoutes;