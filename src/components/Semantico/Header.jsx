import { FaUser } from 'react-icons/fa';
import CarritoIcon from '../Elementos/CarritoIcon';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
const Header = ({total, carrito})=> {  
    const cantidad = carrito.length;
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
                    <FaUser size={24} />
                </div>
            </header>
            <NavBar/>
        </div>
    );  
} 
export default Header; 