"use client"
import Image from "next/image";
import { Container } from "react-bootstrap";

const GetHelp = () => {
    return (
        <>
        <Container fluid className="py-4">
            <Container className="mb-5 text-center">
                <h2>Get Help When You Need It</h2>
                <div className="pinkboxwraper justify-content-center gap-5 mt-5">
                    <div className="pinkbox align-items-center">
                        <Image src={"/img/icons/livechat.png"} width={80} height={80} alt="Icon 1" className="mx-auto d-block" />
                        <h4 className="pt-3">Live Chat</h4>
                        <p>Instant help from our support team</p>
                        <Image src={"/img/buttons/chat.png"} width={140} height={40} alt="Start Chat" />
                    </div>
                    <div className="pinkbox">
                        <Image src={"/img/icons/whatsapp.png"} width={80} height={80} alt="Icon 1" className="mx-auto d-block" />
                        <h4 className="pt-3">WhatsApp</h4>
                        <p>Message us on<br />WhatsApp</p>
                        <Image src={"/img/buttons/whatsapp.png"} width={140} height={40} alt="WhatsApp" />
                    </div>
                    <div className="pinkbox">
                        <Image src={"/img/icons/phonesupport.png"} width={80} height={80} alt="Phone Support" className="mx-auto d-block" />
                        <h4 className="pt-3">Phone Support</h4>
                        <p>Call us at<br />1-800-ZOIKO-US</p>
                        <Image src={"/img/buttons/callnow.png"} width={140} height={40} alt="Call Now" />
                    </div>
                    <div className="pinkbox">
                        <Image src={"/img/icons/email.png"} width={80} height={80} alt="Email" className="mx-auto d-block" />
                        <h4 className="pt-3">Email Us</h4>
                        <p>Send us<br />your questions</p>
                        <Image src={"/img/buttons/emailus.png"} width={140} height={40} alt="Email Us" />
                    </div>
                </div>
            </Container>
        </Container>
        </>
    );
}
export default GetHelp;