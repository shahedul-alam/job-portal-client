import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import PrivateRoute from "./PrivateRoute";
import JobApplyPage from "../pages/JobApplyPage";
import MyApplicationsPage from "../pages/MyApplicationsPage";
import Shop from "../pages/Shop";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="jobs/:id"
            element={
              <PrivateRoute>
                <JobDetailsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="job-apply/:id"
            element={
              <PrivateRoute>
                <JobApplyPage />
              </PrivateRoute>
            }
          />
          <Route
            path="my-applications"
            element={
              <PrivateRoute>
                <MyApplicationsPage />
              </PrivateRoute>
            }
          />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="reset-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
