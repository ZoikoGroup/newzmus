"use client"
import { Card, CardBody, Col, Container, Image, Row } from "react-bootstrap";

const WhyChooseZoiko = () => {
    return (
        <Container fluid className="bglite p-5 my-4 whychoose">
            <h2 className="text-center pb-3">Why Choose Zoiko Mobile?</h2>
            <Row className="gx-5">
                <Col md={4} sm={12} xs={12}>
                    <Card className="px-5 py-3">
                        <CardBody className="text-center">
                            <Image src="/img/icons/111.png" fluid className="icw10 mb-3" alt="Plan Flexibility"  />
                            <p><span className=" body22">Prepaid and Postpaid Flexibility</span><br />
                            Monthly contracts enabled plans with no hidden fees. Feature-packed postpaid plans with perks that extra mile ahead from all competitors and monopolies.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Card className="px-5 py-3">
                        <CardBody className="text-center">
                            <Image src="/img/icons/222.png" fluid className="icw10 mb-3" alt="Plan Flexibility"  />
                            <p><span className=" body22">Global Connectivity</span><br />
                            Free international calling to 200+ countries.<br />Affordabletravel options and eSIM support for instant global access.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Card className="px-5 py-3">
                        <CardBody className="text-center">
                            <Image src="/img/icons/333.png" fluid className="icw10 mb-3" alt="Sustainablity"  />
                            <p><span className=" body22">Sustainability and Green Initiatives</span><br />
                            Carbon neutral plans and eco-friendly device options. Recycling programs with loyalty rewards for reducing electronic waste.</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row className="gx-5">
                <Col md={4} sm={12} xs={12}>
                    <Card className="px-5 py-3">
                        <CardBody className="text-center">
                            <Image src="/img/icons/444.png" fluid className="icw10 mb-3" alt="AI Powred" />
                            <p><span className=" body22">AI-Powered Tools</span><br />
                            Predictive data recommendations based <br />on usage. Automatic plan switching for faster instant resolutions.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Card className="px-5 py-3">
                        <CardBody className="text-center">
                            <Image src="/img/icons/555.png" fluid className="icw10 mb-3" alt="Regulatory"  />
                            <p><span className=" body22">Regulatory Compliance</span><br />
                            Enhanced 911 services with real-time<br />location sharing. Live chat and email<br />emergency support.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Card className="px-5 py-3">
                        <CardBody className="text-center">
                            <Image src="/img/icons/666.png" fluid className="icw10 mb-3" alt="Customer Support"  />
                            <p><span className=" body22">Customer-Centric Support</span><br />
                            24/7 chat and support for questions like<br />installation programs and unlimited<br />international calling.</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default WhyChooseZoiko;