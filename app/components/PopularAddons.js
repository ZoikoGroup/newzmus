"use client"
import Image from "next/image";
import { Button, Container } from "react-bootstrap";

const PopularAddons = () => {
    return (
        <>
        <Container fluid className="py-4">
            <Container className="mb-5 text-center">
                <h2>Popular Add-Ons</h2>
                <div className="pinkboxwraper justify-content-center gap-5 mt-5">
                    <div className="pinkbox align-items-center">
                        <Image src={"/img/icons/222.png"} width={80} height={80} alt="Icon 1" className="mx-auto d-block" />
                        <h5 className="pt-3">International Calling</h5>
                        <p>Call 200+ countries</p>
                        <p className="txtred">$10/month</p>
                        <Button variant="outline-secondary" size="md">Add to Cart</Button>
                    </div>
                    <div className="pinkbox">
                        <Image src={"/img/icons/extradata.png"} width={80} height={80} alt="Icon 1" className="mx-auto d-block" />
                        <h5 className="pt-3">Extra Hotspot Data</h5>
                        <p>Additional 10GB hotspot</p>
                        <p className="txtred">$15/month</p>
                        <Button variant="outline-secondary" size="md">Add to Cart</Button>
                    </div>
                    <div className="pinkbox">
                        <Image src={"/img/icons/device.png"} width={80} height={80} alt="Icon 1" className="mx-auto d-block" />
                        <h5 className="pt-3">Device Protection</h5>
                        <p>Insurance &amp; warranty</p>
                        <p className="txtred">$8/month</p>
                        <Button variant="outline-secondary" size="md">Add to Cart</Button>
                    </div>
                    <div className="pinkbox">
                        <Image src={"/img/icons/music.png"} width={80} height={80} alt="Icon 1" className="mx-auto d-block" />
                        <h5 className="pt-3">Music Streaming</h5>
                        <p>Music without using data</p>
                        <p className="txtred">$5/month</p>
                        <Button variant="outline-secondary" size="md">Add to Cart</Button>
                    </div>
                </div>
            </Container>
        </Container>
        </>
    );
}
export default PopularAddons;