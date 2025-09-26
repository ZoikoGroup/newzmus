"use client"
import Link from "next/link";
import { Col, Container, Image, Row,  Form, InputGroup, Button } from "react-bootstrap";

const Footer = () => {
    const curyear = new Date().getFullYear();
    return (
        <>
        <Container fluid className="footerboxlarge">
            <Container className="pt-5 txtwhite">
                <Row>
                    <Col md={3} sm={12} xs={12}>
                        <p className="txtwhite">About Us</p>
                        <ul>
                            <li><Link href={"#"}>Our Story</Link></li>
                            <li><Link href={"#"}>Terms &amp; Service</Link></li>
                            <li><Link href={"#"}>Blogs</Link></li>
                            <li><Link href={"#"}>Accessability</Link></li>
                            <li><Link href={"#"}>Careers</Link></li>
                            <li><Link href={"#"}>Zoiko Music Pack</Link></li>
                            <li><Link href={"#"}>Centers</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <p className="txtwhite">Shop</p>
                        <ul>
                            <li><Link href={"#"}>Mobile Plans</Link></li>
                            <li><Link href={"#"}>BYOD</Link></li>
                            <li><Link href={"#"}>New Smart Phones</Link></li>
                            <li><Link href={"#"}>Accessories</Link></li>
                            <li><Link href={"#"}>Tablets</Link></li>
                            <li><Link href={"#"}>Refurbished Smartphones</Link></li>
                            <li><Link href={"#"}>Wearables</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <p className="txtwhite">Help &amp; Support</p>
                        <ul>
                            <li><Link href={"/customer-service"}>Customer Service</Link></li>
                            <li><Link href={"/faqs"}>FAQs</Link></li>
                            <li><Link href={"https://mvnoc.ai/coverage-map"} target="_blank">Coverage Map</Link></li>
                            <li><Link href={"#"}>Network &amp; Service</Link></li>
                            <li><Link href={"/contact-us"}>Contact Us</Link></li>
                            <li><Link href={"/return-policy"}>Return &amp; Warranty Policy</Link></li>
                            <li><Link href={"#"}>Store Locator</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <p className="txtwhite">Zoiko Legal</p>
                        <ul>
                            <li><Link href={"/terms-and-conditions"}>Terms &amp; Conditions</Link></li>
                            <li><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
                            <li><Link href={"/cookie-policy"}>Cookies Policy</Link></li>
                            <li><Link href={"#"}>Additional Information</Link></li>
                            <li><Link href={"/regularity-information"}>Regulatory Information</Link>
                            </li><li><Link href={"/consumer-information"}>Conditions of Use &amp; Privacy Act(CCPA)</Link></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="separator" />
                <Row>
                    <Col md={3} sm={12} xs={12}>
                        <Image src="/img/footer-logo.png" fluid className="w-75" alt="Footer Logo" />
                    </Col>
                    <Col md={4} sm={12} xs={12}>
                        <p className="txtwhite">Social Media</p>
                        <Link href={'https://www.facebook.com/zoikomobileusa'} target="_blank"><i className="bi bi-facebook"></i></Link>
                        <Link href={'https://instagram.com/zoikomobileus'} target="_blank" className="px-3"><i className="bi bi-instagram"></i></Link>
                        <Link href={'https://uk.pinterest.com/zoikomobileusa/'} target="_blank"><i className="bi bi-pinterest"></i></Link>
                        <Link href={'https://x.com/zoikomobileusa'} target="_blank" className="px-3"><i className="bi bi-twitter-x"></i></Link>
                        <Link href={'https://www.linkedin.com/company/zoikomobileusa/'} target="_blank"><i className="bi bi-linkedin"></i></Link>
                        <Link href={'https://www.threads.net/@zoikomobileus'} target="_blank" className="px-3"><i className="bi bi-threads"></i></Link>
                        <Link href={'https://www.youtube.com/@ZoikoMobileUSA'} target="_blank"><i className="bi bi-youtube"></i></Link>
                    </Col>
                    <Col md={5} sm={12} xs={12}>
                        <p className="txtwhite">Download Our App</p>
                        <Image src="/img/buttons/app-store.png" fluid className="w-25" alt="App Store" />
                        <Image src="/img/buttons/play-store.png" fluid className="w-25 mx-3" alt="Google Play Store" />
                    </Col>
                </Row>
            </Container>
        </Container>
        
        <Container fluid className="bgred">
            <Container className="py-3 text-center small">
                <hr className="separator" />
                &copy; {curyear} Zoiko Mobile | Zoiko Mobile Inc is a subsidiary of Zoiko Communications Group Inc | Headquartered at 5900 Balcones Drive, Austin, TX 78731 | All rights reserved.
            </Container>
        </Container>
        </>
    );
}
export default Footer;