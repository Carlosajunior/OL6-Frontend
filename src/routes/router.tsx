import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "../pages/Login/login-form";
import { SignUpForm } from "../pages/Signup/signup-form";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
      </Routes>
    </Router>
  );
};
