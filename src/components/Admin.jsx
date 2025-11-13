import FormularioProducto from './Elementos/FormularioProducto';
const Admin = () => {
    const API = 'https://6915352784e8bd126af9131c.mockapi.io/productos';
    const agregarProducto = async(producto) => {
        try{
            const respuesta = await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto)
            });
            if(!respuesta.ok) throw new Error("Error al agregar el producto");
            const dato = await respuesta.json();
            console.log("Producto agregado: ", dato);
            alert("Producto agregado correctamente.");
        }catch(error){
            console.error(error.message);
            alert("Hubo un problema al agregar el producto.");
        }
    };
    return (
        <main>
            <FormularioProducto onAgregar={agregarProducto}></FormularioProducto>
        </main>
    );
}
export default Admin;