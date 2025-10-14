import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
const CarritoIcon = ({ cantidad = 0 }) => {
  return (
    <Link to={`/carrito`}>
      <div className="position-relative d-inline-block">
        <FiShoppingCart
          size={28}
          className="cursor-pointer text-light header-icons"
        />
        {cantidad > -1 && (
          <Badge
            bg="danger"
            pill
            className="position-absolute top-0 start-100 translate-middle badge-carrito"
          >
            {cantidad}
          </Badge>
        )}
      </div>
    </Link>
  );
};
export default CarritoIcon;