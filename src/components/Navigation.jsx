import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../CSS_Files/nav.css';


const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' className='nav' fixed='top'>
                <Container className='navContainer'>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="mt-3 m-auto justify-content-between w-100 align-items-center" id='navbar'>
                            <Nav.Link className='navText' href='/'>HOME</Nav.Link>
                            <Nav.Link className='navText' href='/about'>ABOUT ME</Nav.Link>
                            <Nav.Link className='navText' href='/portfolio'>PORTFOLIO</Nav.Link>
                            <Nav.Link className='navText' href='/contact'>CONTACT</Nav.Link>
                            <Button
                                onClick={() => {
                                window.open("https://drive.google.com/file/d/1H6WGCUGes7Gt2LS1WB9l7lOgGjwA_mF0_AQHKjNZdEg/view?usp=sharing");
                                }}
                                className='resumebtn'><span>Resume</span>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Navigation;
