import { Container, Nav } from 'react-bootstrap';
const Footer = ()=> {  
    return (  
        <footer className="bg-dark text-light mt-auto py-2">
            <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div>
                    &copy; {new Date().getFullYear()} My Store
                </div>
                <Nav className="mt-2 mt-md-0">
                    <Nav.Link href="#" className="text-light px-2">Acerca de nosotros</Nav.Link>
                    <Nav.Link href="#" className="text-light px-2">Políticas de privacidad</Nav.Link>
                </Nav>
            </Container>
        </footer>
    );  
}  
export default Footer; 