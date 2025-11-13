import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Contexto/AuthContext";
const RutaProtegida = ({children}) => {
    const {usuario} = useAuthContext();
    if(!usuario){
        return <Navigate to="/login" replace/>
    }
    return children;
}
export default RutaProtegida;