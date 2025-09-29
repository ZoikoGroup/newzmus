"use client"
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function FantasticDeal () {
    return (
        <Container fluid className="py-5">
            <Container className="orangebg p-0">
                <Row className="align-items-center">
                    <Col md="6" sm="12" xs="12">
                        <div className="px-5">
                            <h2>Pick Up A Fantastic Deal On Our Smartphones!</h2>
                            <p>From Sleek Design to Lightning-Fast Processors, Our Smartphones Deliver Unmatched Performance and Style.</p>
                            <Button variant="light" size="lg" href="#" style={{color:'#E01C5B'}}>View All Smartphones</Button>
                        </div>
                    </Col>
                    <Col md="6" sm="12" xs="12">
                        <Image src="/img/phones/phones.png" fluid className="w-100" alt="Phones" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

