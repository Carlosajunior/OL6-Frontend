import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "../pages/Login/login-form";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
      </Routes>
    </Router>
  );
};
