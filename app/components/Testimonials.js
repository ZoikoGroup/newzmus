"use client"
import { Container, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import Image from "next/image";

const Testimonials = () => {
    return (
        <Container className="p-5 bglite text-center">
            <Carousel controls={false} indicators={false}>
                <CarouselItem>
                    <Image src={"/img/star-rating.png"} width={300} height={60} className="mb-4" alt="Rating" />
                    <p className="body22 txtblack">Zoiko Mobile has exceeded my expectations. <b>Not only do they offer great value-for-money deals, but their service is top-notch.</b> Setting up and changing tariffs has never been easier &mdash; a few simple steps and you&apos;re good to go. What truly sets Zoiko Mobile apart is the inclusion of unlimited text, picture messages, and calls in all their plans. Plus, as the UK&apos;s best-rated mobile network, they ensure reliable coverage wherever I go.</p>
                    <p className="body22 txtblack">Kärt J.</p>
                </CarouselItem>
                <CarouselItem>
                    <Image src={"/img/star-rating.png"} width={300} height={60} className="mb-4" alt="Rating" />
                    <p className="body22 txtblack">I cannot speak highly enough about Zoiko Mobile. <b>Using their services, I have been able to effortlessly stay connected with my loved ones across Europe. What truly impressed me was the affordable plans they offer, which perfectly fit within everyone&apos;s budget. </b>With Zoiko Mobile, I never have to worry about outrageous bills or hidden charges.</p>
                    <p className="body22 txtblack">Georgina H.</p>
                </CarouselItem>
            </Carousel>
        </Container>
    );
}
export default Testimonials;