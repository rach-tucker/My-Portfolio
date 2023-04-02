import { Navbar, Nav, Container } from 'react-bootstrap';
import '../CSS_Files/nav.css'


const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' className='nav'>
                <Container className='navContainer'>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mt-3 m-auto justify-content-between w-100 align-items-center" id='navbar'>
                            <Nav.Link className='navText' href='/'>HOME</Nav.Link>
                            <Nav.Link className='navText' href='/about'>ABOUT ME</Nav.Link>
                            <Nav.Link className='navText' href='/portfolio'>PORTFOLIO</Nav.Link>
                            <Nav.Link className='navText' href='/contact'>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Navigation;
