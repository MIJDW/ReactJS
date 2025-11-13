import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
const DetalleProducto = () => {
    const {id} = useParams();
    const [productos, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setCargando(true);
        setError(null);
        fetch(`https://6915352784e8bd126af9131c.mockapi.io/productos/${id}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setProducto(data);
                setCargando(false);
            })
            .catch(error => {
                setError('No se a podido cargar su producto');
                setCargando(false);
            })
    }, [id]);
    return {productos, cargando, error};
}
export default DetalleProducto;