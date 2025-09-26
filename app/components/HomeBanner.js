"use client"
import React from "react";
import { Button, Carousel, Container } from "react-bootstrap";

const HomeBanner = () => {
    return (
        <Container fluid className="newhomebanner d-flex align-items-center">
            <Container className="w-50">
                <h1 className="verybig txtred">UNBEATABLE VALUE</h1>
                <h2 className="py-4"><span className="txtred">ZOIKO MOBILE</span><span className="txtblack">: AMAZING BYOD DEALS | SUPPORTING<br />ANIMALS | ENJOYING MUSIC</span></h2>
                <Button href='/zoiko-mobile-switch-save-form' variant="danger" size="lg" className="custom-button">Switch &amp; Save</Button>
                <Button href='#' variant="outline-danger" className="mx-4 custom-button" size="lg">Know More</Button>
            </Container>
        </Container>
    );
}
export default HomeBanner;