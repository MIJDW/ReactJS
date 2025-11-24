import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Contexto/AuthContext";

const RutaProtegidaAdmin = ({ children }) => {
  const { usuario } = useAuthContext();

  if (usuario !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RutaProtegidaAdmin;
