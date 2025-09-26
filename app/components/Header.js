"use client"
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import { usePathname} from 'next/navigation';

const Header = () => {

    const pathname = usePathname();
    
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary p-0" fixed="top">
            <Container>
                <Navbar.Brand href="/"><Image src='/img/zmuslogo-new.png' width={160} height={80} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/prepaid-plans" className={pathname == "/prepaid-plans" ? "active" : "" }>Prepaid Plans</Nav.Link>
                        <Nav.Link href="/postpaid-plans" className={pathname == "/postpaid-plans" ? "active" : "" }>Postpaid Plans</Nav.Link>
                        <Nav.Link href="/business-deals" className={pathname == "/business-deals" ? "active" : "" }>Business Deals</Nav.Link>
                        <Nav.Link href="/travel-plans" className={pathname == "/travel-plans" ? "active" : "" }>Travel Plans</Nav.Link>
                        <Nav.Link href="/shop" className={pathname == "/shop" ? "active" : "" }>Shop</Nav.Link>
                        <Nav.Link href="/support" className={pathname == "/support" ? "active" : "" }>Support</Nav.Link>
                        <Button href='#' variant="outline-danger" className="mx-2 px-4" size="xs">Login</Button>
                        <Button href='#' variant="danger" className="mx-2 px-4" size="sm">Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;