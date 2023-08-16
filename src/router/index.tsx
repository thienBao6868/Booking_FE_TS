import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import SigninPage from "../pages/SigninPage";
import NoMatchPage from "../pages/NoMatchPage";
import HomePage from "../pages/HomePage";
import SigninWithPasswordPage from "../pages/SigninWithPasswordPage";
import RegisterWithPasswordPage from "../pages/RegisterWithPasswordPage";
import CheckEmail from "./CheckEmail";

function Router() {
  
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SigninPage />} />
        <Route
          path="/signin/password"
          element={
            <CheckEmail>
               <SigninWithPasswordPage />
            </CheckEmail>
             
          }
        />

        <Route path="/register" element={<SigninPage />} />
        <Route
          path="/register/password"
          element={<RegisterWithPasswordPage />}
        />

        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
