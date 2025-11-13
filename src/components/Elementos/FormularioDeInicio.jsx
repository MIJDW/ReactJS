import { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useAuthContext } from '../Contexto/AuthContext';
import { useNavigate } from 'react-router-dom';

const FormularioDeInicio = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    if(usuario == 'admin' && contrasenia == '1234'){
      iniciarSesion(usuario);
      navigate('/admin');
    }else{
      alert('Usuario o Contraseña invalido');
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-90 bg-light">
      <Card className="shadow-sm bg-dark text-light p-4" style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
          <Form onSubmit={manejarSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control 
                type="text" 
                value={usuario}
                placeholder="Ingresa tu usuario" 
                className="bg-secondary text-light border-0"
                onChange={(evento) => setUsuario(evento.target.value)}
                required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                value={contrasenia}
                placeholder="Ingresa tu contraseña" 
                className="bg-secondary text-light border-0"
                onChange={(evento) => setContrasenia(evento.target.value)}
                required />
            </Form.Group>
            <Button 
              variant="success" 
              type="submit" 
              className="w-100 mt-4 shadow-sm">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default FormularioDeInicio;