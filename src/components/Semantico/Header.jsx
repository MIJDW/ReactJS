import { FaUser, FaSignInAlt,  FaSignOutAlt} from 'react-icons/fa';
import CarritoIcon from '../Elementos/CarritoIcon';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useContext } from 'react';
import { CarritoContext } from '../Contexto/CarritoContext';
import { useAuthContext } from '../Contexto/AuthContext';
const Header = ()=> {  
    const {carrito, total} = useContext(CarritoContext);
    const cantidad = carrito.length;
    const {usuario, cerrarSesion} = useAuthContext();
    return (  
        <div>
            <header className="app-header d-flex align-items-center justify-content-between px-3 bg-dark">
                <Link to={`/`} className="text-decoration-none">
                    <h3 className="m-0 text-light">My Store</h3>
                </Link>
                <div className="header-icons d-flex gap-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="m-0">
                            $<strong>{total.toFixed(2)}</strong>
                        </p>
                        <CarritoIcon cantidad={cantidad} />
                    </div>

                    {!usuario ? (
                        <Link to="/login" className="text-light d-flex align-items-center gap-1 text-decoration-none">
                        <FaSignInAlt size={22} />
                        
                        </Link>
                    ) : (
                        <button 
                        onClick={cerrarSesion} 
                        className="btn btn-link text-light d-flex align-items-center gap-1 text-decoration-none p-0"
                        >
                        <FaSignOutAlt size={22} />
                        </button>
                    )}
                </div>
            </header>
            <NavBar/>
        </div>
    );  
} 
export default Header;