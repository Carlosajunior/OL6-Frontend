import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "../pages/Login/login-form";
import { SignUpForm } from "../pages/Signup/signup-form";
import { Home } from "../pages/Home/home";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};
