"use client"
import Image from "next/image";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import CarouselPlans from "./CarouselPlans";

const HomeSecA = () => {
    return (
        <>
        <Container fluid className="pinkbg">
            <Container className="mb-5" style={{marginTop:'-120px'}}>
                <Row>
                    <Col md="6" sm="12" xs="12">
                        <Card className="p-4">
                            <Image src={"/img/icons/orange-bg.png"} width={80} height={80} alt="Icon" />
                            <h2 className="py-4 txtorange">Consumer Plans</h2>
                            <p className="txtgrey">Perfect for individuals and families looking for reliable mobile service</p>
                            <Image src={"/img/buttons/link-1.png"} width={230} height={58} alt="Link" />
                        </Card>
                    </Col>
                    <Col md="6" sm="12" xs="12">
                        <Card className="p-4">
                            <Image src={"/img/icons/orangebg2.png"} width={80} height={80} alt="Icon" />
                            <h2 className="py-4 txtorange">Business Plans</h2>
                            <p className="txtgrey">Scalable solutions for small businesses to enterprise organizations</p>
                            <Image src={"/img/buttons/link-2.png"} width={230} height={58} alt="Link" />
                        </Card>
                    </Col>
                </Row>
                <div className="pinkboxwraper justify-content-center gap-4 mt-5">
                    <div className="pinkbox align-items-center">
                        <Link href={"#"}>
                            <Image src={"/img/icons/icon1-home.png"} width={80} height={80} alt="Icon 1" className="mx-auto d-block" />
                            <p>View Plans</p>
                        </Link>
                    </div>
                    <div className="pinkbox">
                        <Link href={"#"}>
                            <Image src={"/img/icons/icon2-home.png"} width={80} height={80} alt="Icon 2" className="mx-auto d-block" />
                            <p>Activate Your SIM</p>
                        </Link>
                    </div>
                    <div className="pinkbox">
                        <Link href={"#"}>
                            <Image src={"/img/icons/icon3-home.png"} width={80} height={80} alt="Icon 3" className="mx-auto d-block" />
                            <p>Switch &amp; Save</p>
                        </Link>
                    </div>
                    <div className="pinkbox">
                        <Link href={"#"}>
                            <Image src={"/img/icons/icon4-home.png"} width={80} height={80} alt="Icon 4" className="mx-auto d-block" />
                            <p>Special Deals</p>
                        </Link>
                    </div>
                    <div className="pinkbox">
                        <Link href={"#"}>
                            <Image src={"/img/icons/icon5-home.png"} width={80} height={80} alt="Icon 5" className="mx-auto d-block" />
                            <p>Redeem Cashback</p>
                        </Link>
                    </div>
                </div>
            </Container>
        </Container>
        <Container fluid className="bg-green py-4">
            <Container>
                <h4>Join Zoiko Mobile Today and Start Something New!</h4>
                <p>Reliable Network Coverage at Low Prices | Free International Calls | Free High-Speed 5G Data</p>
            </Container>
        </Container>
        <CarouselPlans />
        <Container fluid className="py-4 bgwhite">
            <Container className="py-4 my-4">
                <Row className="align-items-center">
                    <Col md={6} sm="12" xs="12">
                        <h2>Keep Your Number</h2>
                        <p>Switch to Zoiko Mobile without losing your current phone number. Our simple 3-step process makes it easy.</p>
                        <Row>
                            <Col md="1"><Image src={"/img/icons/one.png"} width={40} height={40} alt="One" /></Col>
                            <Col>
                                <h4>Enter Details</h4>
                                <p>Provide your current carrier info, account number, and PIN</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="1"><Image src={"/img/icons/two.png"} width={40} height={40} alt="Two" /></Col>
                            <Col>
                                <h4>Validate</h4>
                                <p>We&quot;ll verify your information with your current carrier</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="1"><Image src={"/img/icons/three.png"} width={40} height={40} alt="Three" /></Col>
                            <Col>
                                <h4>Complete</h4>
                                <p>Your number will transfer within 24 hours</p>
                            </Col>
                        </Row>
                        <Image src={"/img/buttons/number.png"} width={248} height={50} className="my-4" alt="Keep Number" />
                    </Col>
                    <Col md={6} sm="12" xs="12">
                        <Image src={"/img/keep-number.png"} width={611} height={500} alt="Keep Number" />
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    );
}
export default HomeSecA;