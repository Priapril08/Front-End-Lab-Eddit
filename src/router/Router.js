import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/Login/Login";
import SignupPage from "../pages/Signup/Signup";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
