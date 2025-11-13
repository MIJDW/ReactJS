import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);
    const iniciarSesion = (nombreUsuario) => {
        const token = `fake-token-${nombreUsuario}`;
        localStorage.setItem('authToken', token);
        setUsuario(nombreUsuario);
    }
    const cerrarSesion = () => {
        localStorage.removeItem('authToken');
        setUsuario(null);
    }
    return (
        <AuthContext.Provider value={{usuario, iniciarSesion, cerrarSesion}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext);