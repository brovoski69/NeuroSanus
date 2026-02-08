import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PainLog from "./pages/PainLog";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/pain"
        element={
          <ProtectedRoute>
            <PainLog />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/pain" replace />} />
    </Routes>
  );
}