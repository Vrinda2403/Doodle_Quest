import { Navigate } from "react-router-dom";

export default function ChildRoute({ children }) {
  const token = localStorage.getItem("childToken");

  if (!token) return <Navigate to="/login" />;

  return children;
}
