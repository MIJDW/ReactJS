import { useEffect, useState } from "react"
const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProductos(datos);
                setCargando(false);
            })
            .catch(error => {
                setError('No se a podido cargar tus productos');
                setCargando(false);
            })
    }, []);
    return {productos, cargando, error};
}
export default useProductos;