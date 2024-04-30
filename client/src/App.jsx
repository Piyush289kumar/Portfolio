import Home from "./pages/Home.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/Admin/AdminLogin.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
